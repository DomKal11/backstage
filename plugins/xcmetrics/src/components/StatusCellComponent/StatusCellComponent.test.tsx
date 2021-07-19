/*
 * Copyright 2021 The Backstage Authors
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
import React from 'react';
import { renderInTestApp } from '@backstage/test-utils';
import { ApiProvider, ApiRegistry } from '@backstage/core-app-api';
import userEvent from '@testing-library/user-event';
import { StatusCellComponent } from './StatusCellComponent';
import { xcmetricsApiRef } from '../../api';
import {
  mockBuildId,
  mockStatus,
  createMockXcmetricsApi,
} from '../../test-utils';
import { formatStatus } from '../../utils';

describe('StatusCellComponent', () => {
  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ApiProvider
        apis={ApiRegistry.with(xcmetricsApiRef, createMockXcmetricsApi())}
      >
        <StatusCellComponent
          buildStatus={{ id: mockBuildId, buildStatus: mockStatus }}
          size={10}
          spacing={10}
        />
      </ApiProvider>,
    );

    userEvent.hover(rendered.getByTestId(mockBuildId));
    expect(
      await rendered.findByText(formatStatus(mockStatus)),
    ).toBeInTheDocument();
  });
});
