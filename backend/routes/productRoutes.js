const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById }
    = require('../controller/productController');

//  모든 상품데이터 가져오기
// @route GET /api/products
router.get('/', getAllProducts);

//  GET a product by id from db
// @route GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;