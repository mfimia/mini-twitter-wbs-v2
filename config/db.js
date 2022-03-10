import mongoose from "mongoose";
require("dotenv").config();

// 2. connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("DB connected");
  } catch (err) {
    console.error(err.message);
    // If failure then exit server
    process.exit(1);
  }
};

export default connectDB;
