import { Router } from "express";
import { verifyJWT } from "../../middleware/AuthMiddleware.js";
import {getPersonalizedNews} from "./NewsController.js"

const newsRoute = Router(); 

newsRoute.route("/personalized").get(
    verifyJWT,
    getPersonalizedNews
  );


export default newsRoute