import React from "react";
import { useState } from "react";

import "./Cartform.css";
import Navbar from "./Navbar";
import Amazon from "./amazon";
import Cart from "./Cart";

const CartForm = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      <h1 className="heading_content">
        Meet the internet's favorite skincare.
      </h1>
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="Warning">Item already added to your cart</div>
      )}
    </div>
  );
};

export default CartForm;
