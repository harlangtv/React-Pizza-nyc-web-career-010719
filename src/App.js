import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    clickedPizza: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzaData => this.setState({
      pizzas: pizzaData
    })
    )
  }

  // handleEditClick = (event) => {
  //   console.log('clicking edit');
  //   console.log(event);
  //   // console.log(event.target.dataset.id)
  //   //1. have access to the pizza id in pizza
  //   //2. need to get id from pizza to app in order to pass the correct pizza to the PizzaForm
  //   //3. use that id to identify which pizza i've clicked
  // }
  sendPizza = (pizzaID) => {
    let currentPizza = this.state.pizzas.filter(pizza => {
      if(pizza.id === pizzaID){
        return pizza
      }
    })
    this.setState({
      clickedPizza: currentPizza[0]
    })
  }



  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm
          editPizza={this.state.clickedPizza}
          />
        <PizzaList
          pizzas={this.state.pizzas}
          sendPizza={this.sendPizza}
          />
      </Fragment>
    );
  }
}

export default App;
