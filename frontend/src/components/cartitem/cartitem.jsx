import React from 'react';
import './cartitem.css';
import { Link } from 'react-router-dom';

const Cartitem = ({ item, quantityChangeHandler, removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">{item.price}</p>
            <select
                className="cartitem__select"
                value={item.quantity}
                onChange={(e) =>
                    quantityChangeHandler(item.product, e.target.value)}
            >
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                ))}
            </select>
            <button
                className="cartitem__deleteBtn"
                onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    )
}

export default Cartitem;