import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Order for all hungry</h1>
        <h3>Total: U${this.props.total}</h3>
      </div>
    );
  }
}
