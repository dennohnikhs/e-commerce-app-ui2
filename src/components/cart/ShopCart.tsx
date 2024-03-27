import React from "react";
import "../../styles/shopcart.css";

const ShopCart = ({ item, handleClick }) => {
  if (item) {
    const { title, price, img } = item;
    const newHandleClick = () => {
      handleClick(item);
    };

    return (
      <div className="cards">
        <div className="image_box">
          <img className="imgbottle" src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Price :$ {price}</p>
          <button onClick={newHandleClick}>Add to Cart</button>
        </div>
      </div>
    );
  }
};

export default ShopCart;
