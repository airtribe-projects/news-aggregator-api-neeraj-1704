import User from "../../model/UserSchema.js";
import { ApiError } from "../../utils/ApiError.js";
import { generateAccessToken } from "../../utils/token.js"


export const loginUserService = async ({ email, password }) => {
    // 1. Find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    // 2. Validate password
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    // 3. Generate tokens
    const accessToken =
        await generateAccessToken(user._id);

    // 4. Fetch safe user data
    const loggedInUser = await User.findById(user._id)
        .select("-passwordHash");

    return {
        user: loggedInUser,
        accessToken
    };
};


export const logoutUserService = async () => {
    return true;
}