import React from "react";
import list from "../../data";
import ShopCart from "./ShopCart";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((list) => (
        <ShopCart item={list} handleClick={handleClick} key={list.id} />
      ))}
    </section>
  );
};

export default Amazon;
