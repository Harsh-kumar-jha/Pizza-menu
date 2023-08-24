// import React from "react";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openingTime = 12;
  const closingTime = 22;
  const isOpen = openingTime <= hour && hour <= closingTime;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingTime={closingTime} />
      ) : (
        <div className="order">
          We are happy to serve you between {openingTime}:00 till {closingTime}
          :00
        </div>
      )}
    </footer>
  );
};

export default Footer;
