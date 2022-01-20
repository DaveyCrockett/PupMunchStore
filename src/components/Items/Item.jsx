import "./item.css";
import { useContext } from "react";
import storeContext from "../../context/storeContext"

const Item = (props) => {
    const removeFromCart = useContext(storeContext).removeProductFromCart;

    const getTotal = () => {
        let total = props.item.price * props.item.quantity;
        return total.toFixed(2);
    };

    const handleRemove = () => {
        removeFromCart(props.item._id);
    }

    return (
        <div className="cart-item">
            {/* TODO: Add CSS to items: display flex then add flex value to each element */}
            <img src={"/images/" + props.item.image} alt="item" />
            <h6>{props.item.title}</h6>
            <label>Price: {props.item.price}</label>
            <label>Qty: {props.item.quantity}</label>
            <label>Total{getTotal()}</label>
            <button onClick={handleRemove} className="btn btn-sm btn-danger">Delete</button>
        </div>
    );
  };
  
  export default Item;