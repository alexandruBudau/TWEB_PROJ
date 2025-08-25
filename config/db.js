const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/cinecritic_the_matured_tomato');
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
