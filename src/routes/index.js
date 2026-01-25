import { Router } from "express";
import userRoute from "../modules/user/UserRoute.js";
import authRouter from "../modules/auth/AuthRoutes.js"
const router = Router();

router.use("/users", userRoute); 

router.use("/auth", authRouter); 

export default router;