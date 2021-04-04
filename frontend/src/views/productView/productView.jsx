import React from 'react';
import './productView.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductView = ({ match, history }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    // 장바구니에 추가 버튼 클릭 handler
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, quantity));
        // cart로 이동
        history.push(`/cart`);
    };

    return (
        <div className="productview">
            {loading ?
                <div className="loader">Loading...</div> :
                error ?
                    <h2>{error}</h2> :
                    (
                        <>
                            <div className="productview__left">
                                <div className="left__image">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="left__info">
                                    <p className="left__name">{product.name}</p>
                                    <p>PRICE:{product.price}</p>
                                    <p>DESCRIPTION: {product.description}</p>
                                </div>
                            </div>
                            <div className="productview__right">
                                <div className="right__info">
                                    <p>PRICE: <span> {product.price}</span></p>
                                    <p>STOCK:
                                        <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </p>
                                    <p>
                                        QUANTITY
                                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </p>
                                    <p>
                                        <button type="button" onClick={addToCartHandler}>ADD TO CART</button>
                                    </p>
                                </div>
                            </div>
                        </>
                    )
            }

        </div >
    )
};

export default ProductView;