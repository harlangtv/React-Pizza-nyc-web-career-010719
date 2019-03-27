import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  displayPizzas = () => {
    // console.log(this.props)
    // console.log(this.props.handleEditClick);
    return this.props.pizzas.map(pizza => {
      return <Pizza key={pizza.id} pizza={pizza} editPizza={this.props.handleEditClick} />
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.displayPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
