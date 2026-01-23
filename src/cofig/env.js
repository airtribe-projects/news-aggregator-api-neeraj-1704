import dotenv from "dotenv"

dotenv.config();

const apiKey = process.env.API_KEY;
const newsApiBaseUrl = process.env.NEWS_API_BASE_URL;
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || "developement";
const mongodbUrl = process.env.MONGODB_URI;


export {
    apiKey, newsApiBaseUrl, port, nodeEnv, mongodbUrl
}