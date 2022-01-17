import { useState } from "react";
import "./productCard.css";
import ProductQuantity from "./ProductQuantity/productQuantity";

const ProductCard = (props) => {
  // var total = 0;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    // let price = val * props.product.price;
    // total = price.toFixed(2);
    // console.log(total);
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;

    return total.toFixed(2);
  }

  

  return (
    <div className="productCard">
      <label className="prod-category">{props.product.category}</label>
      <img src={"/images/" + props.product.image} alt="product" />
      <h2 className="imgTitle">{props.product.title}</h2>
      <div className="totalPrice">
        <label className="price">
          Price: ${props.product.price.toFixed(2)}
        </label>
        <label className="total">Total: $</label>
      </div>
      <ProductQuantity handleQuantityChange={handleQuantityChange} />
      <button className="addProduct btn btn-primary btn-sm">
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductCard;
