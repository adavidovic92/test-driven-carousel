import React from 'react';

export default (Component, indexPropName) =>
  class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${Component.displayName || Component.name})`;

    state = {
      index: 0,
    };

    handleDecrement = (upperBound) => {
      this.setState(({ index }) => {
        const newIndex = upperBound ? (index + upperBound - 1) % upperBound : index - 1;
        return {
          index: newIndex,
        };
      });
    };

    handleIncrement = (upperBound) => {
      this.setState(({ index }) => {
        const newIndex = upperBound ? (index + 1) % upperBound : index + 1;
        return {
          index: newIndex,
        };
      });
    };

    render() {
      return <Component {...this.props} />;
    }
  };
