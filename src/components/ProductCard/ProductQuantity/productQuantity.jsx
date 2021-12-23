import "./productQuantity.css";
import React, { useState } from "react";

const ProductQuantity = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    let val = quantity + 1
    setQuantity(val);
    props.handleQuantityChange(val);
  };

  const decrement = () => {
    if (quantity > 1) {
      let val = quantity - 1
      setQuantity(val);
      props.handleQuantityChange(val);
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
