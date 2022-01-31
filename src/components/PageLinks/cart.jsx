import "./cart.css"
import { useContext } from 'react';
import storeContext from "../../context/storeContext";
import Item from "../Items/Item";

const Cart = () => {

    const cart = useContext(storeContext).cart;
    const getTotal = () => {
        let total = 0;
        for(let i=0;i<cart.length;i++){
            total += cart[i].quantity * cart[i].price 
        }
        return total.toFixed(2);
    };
    return (
        <div className="cart-page">
            <h1>Welcome to the cart</h1>
            <h2>This is the your cart</h2>
            <h3>You have {cart.length} items in your cart.</h3>
            <div className="cart-container">
                <div className="items">
                    {cart.map(item => <Item key={item._id} item={item}/>)}
                </div>
                <div className="side-menu">
                  <h5>Ready to pay?</h5>
                  <h6>${getTotal()}</h6>
                  <hr />
                  <button className="btn btn-lg btn-primary">Pay now</button>      
                </div>
            </div>
        </div>
    );
  }
  
  export default Cart;