---
'@backstage/app-defaults': patch
'@backstage/catalog-client': patch
'@backstage/catalog-model': patch
'@backstage/config': patch
'@backstage/core-app-api': patch
'@backstage/core-components': patch
'@backstage/core-plugin-api': patch
'@backstage/dev-utils': patch
'@backstage/errors': patch
'@backstage/integration': patch
'@backstage/integration-react': patch
'@backstage/plugin-adr': patch
'@backstage/plugin-adr-common': patch
'@backstage/plugin-airbrake': patch
'@backstage/plugin-allure': patch
'@backstage/plugin-analytics-module-ga': patch
'@backstage/plugin-analytics-module-ga4': patch
'@backstage/plugin-analytics-module-newrelic-browser': patch
'@backstage/plugin-apache-airflow': patch
'@backstage/plugin-api-docs': patch
'@backstage/plugin-api-docs-module-protoc-gen-doc': patch
'@backstage/plugin-apollo-explorer': patch
'@backstage/plugin-azure-devops': patch
'@backstage/plugin-azure-devops-common': patch
'@backstage/plugin-azure-sites': patch
'@backstage/plugin-azure-sites-common': patch
'@backstage/plugin-badges': patch
'@backstage/plugin-bazaar': patch
'@backstage/plugin-bitbucket-cloud-common': patch
'@backstage/plugin-bitrise': patch
'@backstage/plugin-catalog': patch
'@backstage/plugin-catalog-common': patch
'@backstage/plugin-catalog-graph': patch
'@backstage/plugin-catalog-import': patch
'@backstage/plugin-catalog-react': patch
'@backstage/plugin-catalog-unprocessed-entities': patch
'@backstage/plugin-cicd-statistics': patch
'@backstage/plugin-cicd-statistics-module-gitlab': patch
'@backstage/plugin-circleci': patch
'@backstage/plugin-cloudbuild': patch
'@backstage/plugin-code-climate': patch
'@backstage/plugin-code-coverage': patch
'@backstage/plugin-codescene': patch
'@backstage/plugin-config-schema': patch
'@backstage/plugin-cost-insights': patch
'@backstage/plugin-cost-insights-common': patch
'@backstage/plugin-devtools': patch
'@backstage/plugin-devtools-common': patch
'@backstage/plugin-dynatrace': patch
'@backstage/plugin-entity-feedback': patch
'@backstage/plugin-entity-feedback-common': patch
'@backstage/plugin-entity-validation': patch
'@backstage/plugin-explore': patch
'@backstage/plugin-explore-common': patch
'@backstage/plugin-explore-react': patch
'@backstage/plugin-firehydrant': patch
'@backstage/plugin-fossa': patch
'@backstage/plugin-gcalendar': patch
'@backstage/plugin-gcp-projects': patch
'@backstage/plugin-git-release-manager': patch
'@backstage/plugin-github-actions': patch
'@backstage/plugin-github-deployments': patch
'@backstage/plugin-github-issues': patch
'@backstage/plugin-github-pull-requests-board': patch
'@backstage/plugin-gitops-profiles': patch
'@backstage/plugin-gocd': patch
'@backstage/plugin-graphiql': patch
'@backstage/plugin-graphql-voyager': patch
'@backstage/plugin-home': patch
'@backstage/plugin-home-react': patch
'@backstage/plugin-ilert': patch
'@backstage/plugin-jenkins': patch
'@backstage/plugin-jenkins-common': patch
'@backstage/plugin-kafka': patch
'@backstage/plugin-kubernetes': patch
'@backstage/plugin-kubernetes-common': patch
'@backstage/plugin-lighthouse': patch
'@backstage/plugin-lighthouse-common': patch
'@backstage/plugin-linguist': patch
'@backstage/plugin-linguist-common': patch
'@backstage/plugin-microsoft-calendar': patch
'@backstage/plugin-newrelic': patch
'@backstage/plugin-newrelic-dashboard': patch
'@backstage/plugin-nomad': patch
'@backstage/plugin-octopus-deploy': patch
'@backstage/plugin-opencost': patch
'@backstage/plugin-org': patch
'@backstage/plugin-org-react': patch
'@backstage/plugin-pagerduty': patch
'@backstage/plugin-periskop': patch
'@backstage/plugin-permission-common': patch
'@backstage/plugin-permission-react': patch
'@backstage/plugin-playlist': patch
'@backstage/plugin-playlist-common': patch
'@backstage/plugin-puppetdb': patch
'@backstage/plugin-rollbar': patch
'@backstage/plugin-scaffolder': patch
'@backstage/plugin-scaffolder-common': patch
'@backstage/plugin-scaffolder-react': patch
'@backstage/plugin-search': patch
'@backstage/plugin-search-common': patch
'@backstage/plugin-search-react': patch
'@backstage/plugin-sentry': patch
'@backstage/plugin-shortcuts': patch
'@backstage/plugin-sonarqube': patch
'@backstage/plugin-sonarqube-react': patch
'@backstage/plugin-splunk-on-call': patch
'@backstage/plugin-stack-overflow': patch
'@backstage/plugin-stackstorm': patch
'@backstage/plugin-tech-insights': patch
'@backstage/plugin-tech-insights-common': patch
'@backstage/plugin-tech-radar': patch
'@backstage/plugin-techdocs': patch
'@backstage/plugin-techdocs-addons-test-utils': patch
'@backstage/plugin-techdocs-module-addons-contrib': patch
'@backstage/plugin-techdocs-react': patch
'@backstage/plugin-todo': patch
'@backstage/plugin-user-settings': patch
'@backstage/plugin-vault': patch
'@backstage/plugin-xcmetrics': patch
'@backstage/release-manifests': patch
'@backstage/test-utils': patch
'@backstage/theme': patch
'@backstage/types': patch
'@backstage/version-bridge': patch
---

Mark package as being free of side effects, allowing more optimized Webpack builds.