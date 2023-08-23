// import React from "react";
import Pizza from "./Pizza";
import pizzaData from "./data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.map((pizzas, index) => (
        <Pizza
          key={index}
          name={pizzas.name}
          ingredients={pizzas.ingredients}
          photoName={pizzas.photoName}
          price={pizzas.price}
          soldOut={pizzas.soldOut}
        />
      ))}
    </main>
  );
};

export default Menu;
