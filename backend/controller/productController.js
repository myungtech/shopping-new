const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json(products);
        // console.log(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};