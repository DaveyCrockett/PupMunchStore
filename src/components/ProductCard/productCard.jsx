import './productCard.css';
import ProductQuantity from './ProductQuantity/productQuantity';

const ProductCard = () => {
    return(
        <div className="productCard">
            <img src="https://picsum.photos/200/300" alt="Random Images"/>
            <h2 className="imgTitle">Title</h2>
            <div className='totalPrice'>
                <label className="price">$Price</label>
                <label className="total">$Total</label>
            </div>
            <ProductQuantity />
            <button className="addProduct btn btn-primary btn-sm"><i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default ProductCard;