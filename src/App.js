import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import ProductRow from './components/productRow';
import {
  getProducts
} from './api/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: getProducts(),
      order: [],
      nextId: 3,
      query: ''
    };    

    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
  }

  addToOrder(product) {
    let order = this.state.order;
    order.push(product);    
    this.setState({
      order  
    });
  }

  removeFromOrder(index) {
    this.setState({
        order: this.state.order.filter((order, indexFilter) => index != indexFilter)
      });
  }

  calculateTotal() {
    let value = 0;
    let order = this.state.order;
    order.forEach((element) => value += element.value);
    return value;
  }

  handleSearchChanged = () => {
    this.setState({
      query: this.search.value
    });
  } 

  render() {
    return (
      <div className="App">
        <div className="orders-wrapper">
          <Header total={this.calculateTotal()}/>
          <input 
            ref={input => this.search = input}
            onChange={this.handleSearchChanged}
            className="search-input" 
            type="text" 
            placeholder="Search on your order"
          />
          <Products addToOrder={this.addToOrder} products={this.state.products}/>
          <ul>
            {
              this.state.order.filter((product) => {
                const query = this.state.query.toLowerCase();
                return (
                  query.trim() == '' || 
                  product.description.toString().toLowerCase().includes(query) ||
                  product.value.toString().toLowerCase().includes(query)
                );
              }).map((product, index) => {                
                return <ProductRow product={product} key={product.index} id={product.id} removeFromOrder={() => this.removeFromOrder(index)}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
