import * as React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

import { App } from '../index';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<App />', () => {
  mockedAxios.get.mockResolvedValueOnce({});
  const renderComponent = () => render(<App />);

  it('should render and match the snapshot', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
