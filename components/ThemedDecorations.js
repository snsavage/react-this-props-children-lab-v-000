import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}
// In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
// This component renders out all of its children, while adding a className prop to every child.
