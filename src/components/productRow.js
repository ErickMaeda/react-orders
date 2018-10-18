import React, {Component} from 'react';
import './productRow.css';

export default class ProductRow extends Component {

  removeFromOrder(id) {
    this.props.removeFromOrder(id);
  }

  render() {
    return (
      <div className="productWrapper">
        <button className="removeProduct" onClick={(e)=> this.removeFromOrder(this.props.id)}>remove</button>
        <span className="productValue">{this.props.product.description}  -  U$ {this.props.product.value}</span>
      </div>
    );
  }
}
