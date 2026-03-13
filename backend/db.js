const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/taskdb";
        await mongoose.connect(mongoURI);

        console.log("MongoDB connected");

    } catch (error) {

        console.error("Database connection failed:", error);

        process.exit(1);

    }

};

module.exports = connectDB;