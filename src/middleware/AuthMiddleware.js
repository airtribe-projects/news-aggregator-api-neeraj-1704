import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { accessToken } from "../cofig/env.js";
import User from "../model/UserSchema.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // token extraction
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log("Token:", token);

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    // Verify token
    const decodedToken = jwt.verify(token, accessToken);

    //  Find user
    const user = await User.findById(decodedToken?._id).select(
      "-passwordHash"
    );

    // user check condition
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});
