import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

import { loginUserService, logoutUserService } from "./AuthService.js";
import { ApiResponse } from "../../utils/ApiResponse.js";



export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
   // console.log(req.body)
    // 1. Validation (controller responsibility)
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    // 2. Call service
    const { user, accessToken } =
        await loginUserService({ email, password });

    // 3. Cookie options
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    };

    // 4. Response
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                200,
                { user, accessToken },
                "User logged in successfully"
            )
        );
});



export const logoutUser = asyncHandler(async (req, res) => {
    await logoutUserService();

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict"
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .json(
            new ApiResponse(
                200,
                {},
                "User logged out successfully"
            )
        );

})
