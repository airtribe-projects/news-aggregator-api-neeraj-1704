import { Router } from "express";
import userRoute from "../modules/user/UserRoute.js";
import authRouter from "../modules/auth/AuthRoutes.js";
import newsRoute from "../modules/news/NewsRoutes.js";
import preferencesRoute from "../modules/preferences/PreferenceRoutes.js"
const router = Router();


// User Module
router.use("/users", userRoute);

// Auth Module
router.use("/auth", authRouter);

// News Module
router.use("/news", newsRoute);

// Preferences Module
router.use("/preferences", preferencesRoute);


export default router;