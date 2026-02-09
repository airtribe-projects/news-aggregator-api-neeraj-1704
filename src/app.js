import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())

// routes 
import router from "./routes/index.js"
app.use("/api/v1",router)


// // test for the sever status 

// app.use("/api/v1", (req, res) => {
//         res.send("This is my test routes");
// })

// global error middleware
import {errorMiddleware} from './middleware/ErrorHandler.js';
app.use(errorMiddleware);

export default app; // This allows: import app from './app.js'