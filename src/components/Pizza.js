import React from "react"

const Pizza = (props) => {
  console.log("in pizza", props.pizza.id);

  const handleClick = (e, pizzaID) => {
    e.preventDefault()
    props.sendPizza(pizzaID)
  }
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian + ''}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => handleClick(e, props.pizza.id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
