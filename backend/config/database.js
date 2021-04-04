require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log("MongoDB 연결 성공!!!");

    } catch (error) {
        console.error("MongoDB 연결 실패!!!");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;