import { Router } from "express";
import { verifyJWT } from "../../middleware/AuthMiddleware.js";
import { getPreferences, updatePreferences } from "./PreferenceController.js"

const preferencesRoute = Router();

preferencesRoute
    .route("/")
    .get(verifyJWT, getPreferences)
    .put(verifyJWT, updatePreferences);

export default preferencesRoute;

