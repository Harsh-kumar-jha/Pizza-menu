// import React from "react";
import Pizza from "./Pizza";
import pizzaData from "./data";

const Menu = () => {
  const pizzaDataLength = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaDataLength > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            ducimus similique quod natus suscipit quaerat nemo corporis! Illo
            sed dolores ipsam dolorem veritatis!
          </p>
          <ul className="pizzas">
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
          </ul>
        </>
      ) : (
        <p>We are still working on our menu....</p>
      )}
    </main>
  );
};

export default Menu;
