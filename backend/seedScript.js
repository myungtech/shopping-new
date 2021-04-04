require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/database');
const productModel = require('./models/productModel');

connectDB();

const importData = async () => {
    try {
        await productModel.deleteMany({});

        await productModel.insertMany(productsData);

        console.log("Data 넣기 성공!!");
        process.exit();
    } catch (error) {
        console.log("Data import 실패!!");
        process.exit(1);
    }
}

importData();