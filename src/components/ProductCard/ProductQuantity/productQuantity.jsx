import "./productQuantity.css";
import React, { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="productQuantity">
      <button className="minus btn btn-sm btn-info" onClick={decrement}>
        -
      </button>
      <label className="quantity">{quantity}</label>
      <button className="plus btn btn-sm btn-info" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
