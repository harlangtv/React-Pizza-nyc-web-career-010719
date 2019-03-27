import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    formPizza: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzaData => this.setState({
      pizzas: pizzaData
    })
    )
  }

  handleEditClick = (key) => {
    console.log('clicking edit');
    console.log(key)
    //1. have access to the pizza id in pizza
    //2. need to get id from pizza to app in order to pass the correct pizza to the PizzaForm
    //3. use that id to identify which pizza i've clicked
  }


  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}
          />
      </Fragment>
    );
  }
}

export default App;
