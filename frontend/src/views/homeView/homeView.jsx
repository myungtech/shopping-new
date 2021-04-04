import React from 'react';
import './homeView.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @componet
import Product from '../../components/product/product';

// @actions
import { getProducts as listProducts } from '../../redux/actions/productActions';
const HomeView = (props) => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    // console.log(getProducts);

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homeview">
            <h2 className="homeview__title">
                PRODUCTS
            </h2>
            <div className="homeview__products">
                {/* 로딩, 에러가 아니라면 products를 */}
                {loading ?
                    <div className="loader">Loading...</div>
                    : error ?
                        <h2>{error}</h2>
                        : products.map((product) =>
                            <Product
                                key={product._id}
                                productId={product._id}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        )
                }
            </div>
        </div>
    )
};
export default HomeView;