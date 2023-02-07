import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    // console.log(products);
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    };
    return (
        <div className="cart">
            <h1>Product is in your cart</h1>
            {products.map((item) => (
                <div className="item" key={item.id}>
                    <img
                        src={process.env.REACT_APP_UPLOAD_URL + item.img}
                        alt=""
                    />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 50)}</p>
                        <div className="price">
                            {item.quantity} x &#x20B9;{item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => dispatch(removeItem({ id: item.id }))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>₹{totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
};

export default Cart;
