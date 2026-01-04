import mongoose from "mongoose";
import { log, error as logError } from "../../utils/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    log("Database connected successfully");
  } catch (err) {
    console.error(err.message);
    logError(err.message);
    process.exit(1);
  }
};

export default connectDB;
