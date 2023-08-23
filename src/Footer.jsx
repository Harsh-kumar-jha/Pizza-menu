// import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openingTime = 12;
  const closingTime = 22;
  const isOpen = openingTime <= hour && hour <= closingTime;
  return (
    <footer className="footer">
      {isOpen ? (
        <>{new Date().toLocaleTimeString()}. We are currently Open....</>
      ) : (
        <>{new Date().toLocaleTimeString()}. We are currently Close....</>
      )}
    </footer>
  );
};

export default Footer;
