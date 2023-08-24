const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : "Rs." + price * 83}</span>
      </div>
    </li>
  );
};

export default Pizza;
