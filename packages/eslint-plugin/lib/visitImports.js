/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

const { builtinModules } = require('module');
const getPackages = require('./getPackages');

/**
 * @typedef LocalImport
 * @type {object}
 * @property {'local'} type
 * @property {string} path
 */

/**
 * @typedef InternalImport
 * @type {object}
 * @property {'internal'} type
 * @property {string} path
 * @property {import('./getPackages').ExtendedPackage} package
 */

/**
 * @typedef ExternalImport
 * @type {object}
 * @property {'external'} type
 * @property {string} path
 * @property {string} packageName
 */

/**
 * @typedef BuiltinImport
 * @type {object}
 * @property {'builtin'} type
 * @property {string} path
 * @property {string} packageName
 */

/**
 * @callback ImportVisitor
 * @param {import('eslint').Rule.Node} node
 * @param {LocalImport | InternalImport | ExternalImport | BuiltinImport} import
 */

/**
 * @param {import('estree').ImportDeclaration | import('estree').ExportAllDeclaration | import('estree').ExportNamedDeclaration | import('estree').ImportExpression | import('estree').SimpleCallExpression} node
 * @returns {string | undefined}
 */
function getImportPath(node) {
  /** @type {import('estree').Expression | import('estree').SpreadElement | undefined | null} */
  let pathNode;

  if (node.type === 'CallExpression') {
    if (
      node.callee.type === 'Identifier' &&
      node.callee.name == 'require' &&
      node.arguments.length === 1
    ) {
      pathNode = node.arguments[0];
    }
  } else {
    pathNode = node.source;
  }

  if (pathNode?.type !== 'Literal') {
    return undefined;
  }
  if (typeof pathNode.value !== 'string') {
    return undefined;
  }

  return pathNode.value;
}

/**
 * @param visitor - Visitor callback
 * @param {import('eslint').Rule.RuleContext} context
 * @param {ImportVisitor} visitor
 */
module.exports = function visitImports(context, visitor) {
  const packages = getPackages(context.getCwd());
  if (!packages) {
    return;
  }

  function visit(node) {
    const importPath = getImportPath(node);
    if (!importPath) {
      return;
    }

    if (importPath[0] === '.') {
      return visitor(node, { type: 'local', path: importPath });
    }

    const pathParts = importPath.split('/');

    // Check for match with plain name, then namespaced name
    let packageName;
    let subPath;
    if (importPath[0] === '@') {
      packageName = pathParts.slice(0, 2).join('/');
      subPath = pathParts.slice(2).join('/');
    } else {
      packageName = pathParts[0];
      subPath = pathParts.slice(1).join('/');
    }
    const pkg = packages?.map.get(packageName);
    if (!pkg) {
      if (
        packageName.startsWith('node:') ||
        builtinModules.includes(packageName)
      ) {
        return visitor(node, { type: 'builtin', path: subPath, packageName });
      }

      return visitor(node, {
        type: 'external',
        path: subPath,
        packageName,
      });
    }

    return visitor(node, { type: 'internal', path: subPath, package: pkg });
  }

  return {
    ImportDeclaration: visit,
    ExportAllDeclaration: visit,
    ExportNamedDeclaration: visit,
    ImportExpression: visit,
    CallExpression: visit,
  };
};
