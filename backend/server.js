require('dotenv').config();

const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

// json 요청을 받을 수 있음, json데이터를 사용하겠다.
app.use(express.json());
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
