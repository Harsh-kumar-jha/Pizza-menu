const Order = ({ closingTime }) => {
  return (
    <div className="order">
      <p>We are open until {closingTime}:00 come visit us or order online.</p>
      <button className="btn">Order Now!</button>
    </div>
  );
};

export default Order;
