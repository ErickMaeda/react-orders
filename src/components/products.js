import React from 'react';
import './products.css';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {        
    this.setState({value: e.target.value});
  }

  addToOrder(id) {
    let product = this.props.products.filter((product) => product.id == id);
    this.props.addToOrder(product[0]);
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange} className="select">
          {
            this.props.products.map((element) => {              
              return (
                <option key={element.id} value={element.id}>{element.description} - U${element.value}</option>
              )
            })
          }
        </select>
        <button className="btn btn-primary" onClick={() => this.addToOrder(this.state.value)}>Add</button>
      </div>
    );
  }
}
