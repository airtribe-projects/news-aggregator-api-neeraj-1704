import { Router } from "express";
import {
    loginUser, logoutUser
} from "./AuthController.js"

const authRouter = Router();

authRouter.route("/login").post(loginUser);
authRouter.route("/logout").post(logoutUser);


export default authRouter;