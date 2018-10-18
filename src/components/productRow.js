import React from 'react';
import './productRow.css';

export default class ProductRow extends React.Component {

  removeFromOrder(id) {
    this.props.removeFromOrder(id);
  }

  render() {
    return (
      <div className="productWrapper">
        <button className="removeProduct" onClick={(e)=> this.removeFromOrder(this.props.id)}>remove</button>
        {this.props.product.description}  -  U$ {this.props.product.value}
      </div>
    );
  }
}
