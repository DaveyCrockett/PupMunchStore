import { useState } from "react";
import "./productCard.css";
import ProductQuantity from "./ProductQuantity/productQuantity";
import { useContext } from "react";
import storeContext from "../../context/storeContext";

const ProductCard = (props) => {
  // var total = 0;
  const [quantity, setQuantity] = useState(1);
  const add2Cart = useContext(storeContext).addProductToCart

  const handleQuantityChange = (val) => {
    // let price = val * props.product.price;
    // total = price.toFixed(2);
    // console.log(total);
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.product.price;

    return total.toFixed(2);
  }
  
  const handleAdd = () => {
    let prod = {
      ...props.product,
      quantity: quantity,
    }
    add2Cart(prod);
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
        <label className="total">Total: ${getTotal()}</label>
      </div>
      <ProductQuantity handleQuantityChange={handleQuantityChange} />
      <button onClick={handleAdd} className="addProduct btn btn-primary btn-sm">
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductCard;
