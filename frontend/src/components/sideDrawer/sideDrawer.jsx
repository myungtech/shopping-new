import React from 'react';
import './sideDrawer.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];

    //show가 있으면 배열에 show 갖다 붙힘
    if (show) {
        sideDrawerClass.push("show");
    }
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) =>
            quantity + Number(item.quantity), 0);
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-bag"></i>
                        <span>
                            CART
                <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={"/"}>
                        <i className="fas fa-store-alt"></i>
                        <span>
                            SHOP
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;