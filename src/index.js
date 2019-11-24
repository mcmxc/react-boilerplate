import React from 'react';
import { render } from 'react-dom';
import App from './app';
import ErrorBoundary from './errorBoundary';
import './styles.css';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app')
);
