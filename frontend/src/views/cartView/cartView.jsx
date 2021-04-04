import React from 'react';
import './cartView.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// @component
import Cartitem from '../../components/cartitem/cartitem'

// @actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartView = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => { }, []);

    const quantityChangeHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) =>
            Number(item.quantity) + quantity, 0);
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) =>
            (item.price * item.quantity) + price, 0);
    }

    return (
        <div className="cartview">
            <div className="cartview__left">
                <h2>SHOPPING CART</h2>
                {cartItems.length === 0 ? (
                    <div>your cart is empty
                        <Link to="/"> Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <Cartitem
                        key={item.product}
                        item={item}
                        quantityChangeHandler={quantityChangeHandler}
                        removeHandler={removeHandler} />
                ))}
            </div>
            <div className="cartview__right">
                <div className="cartview__info">
                    <p>TOTAL ({getCartCount()}) ITEMS</p>
                    <p>{getCartSubTotal()}￦</p>
                </div>
                <div>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div >
    )
};

export default CartView;