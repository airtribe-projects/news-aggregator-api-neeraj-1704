import app from './app.js'
import connectDB from './db/Connection.js'
import { port } from "./cofig/env.js"

const startServer = async () => {
    try {
        await connectDB();
        console.log("Database Connected");

        app.listen(port, () => {
            console.log("Server running on port", port);
        });
    } catch (err) {
        console.log("DB Connection Failed", err);
        process.exit(1);
    }
};

startServer();

