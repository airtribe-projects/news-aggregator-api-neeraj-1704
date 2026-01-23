import mongoose from "mongoose";
import { DB_NAME } from "../Constants.js";

const connectDB = async () => {
    try {

        // Log to verify the URI is actually being read
        console.log("Attempting to connect to:", process.env.MONGODB_URI);

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    
    } catch (error) {
        console.log("MONOGDB Connection failed", error);
        process.exit(1);
    }
}

export default connectDB;