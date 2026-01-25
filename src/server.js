import app from './app.js'
import connectDB from './db/Connection.js'
import { port } from "./cofig/env.js"

const startServer = async () => {
    try {
        await connectDB();
       console.log("Database Ready")
        app.listen(port, (err) => {
            console.log("Server is listerning on the port", `${port}`)
        })
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

startServer();

