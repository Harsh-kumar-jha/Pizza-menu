const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <div className="pizza pizzas">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>Rs. {price * 83}</span>
      </div>
    </div>
  );
};

export default Pizza;
