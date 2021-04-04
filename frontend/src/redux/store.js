import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// @reducers

import { cartReducer } from "./reducers/cartReducers";
import {
    getProductsReducer,
    getProductDetailsReducer
} from "./reducers/productReducers";

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

// cart 아이템 로컬 저당
const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];


// 초기 state
const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;