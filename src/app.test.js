import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './app';

describe('app component', () => {
  it('renders without error', () => {
    render(<App />);
  });
});
