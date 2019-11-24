import React from 'react';
import { element } from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(error) {
    console.warning(error);
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <p>Something went wrong</p> : children;
  }
}

ErrorBoundary.propTypes = {
  children: element.isRequired,
};

export default ErrorBoundary;
