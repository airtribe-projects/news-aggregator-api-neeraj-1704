import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { accessToken } from "./env.js";
import User from "../model/UserSchema.js";
import { ApiError } from "../utils/ApiError.js";
export const verifyJWT = asyncHandler(async (req, _, next) => {

    try {

        const token = req.cookies?.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unathorized request");

        }

        const decodedToken = jwt.verify(token, accessToken);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if (user) {
            throw new ApiError(401, "Invalid  Access Toekn");
        }

        req.user = user;

        next();

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }

});