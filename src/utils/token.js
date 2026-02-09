import User from "../model/UserSchema.js";
import { ApiError } from "./ApiError.js";

export const generateAccessToken = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return user.generateAccessToken();
};
