import {
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
} from "./UserService.js";

import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

// create User
export const createUser = asyncHandler(async (req, res) => {
    const { name, email, password, preferences } = req.body;
    if (!name || !email || !password) {
      throw new ApiError(400, "All fields are required");
    }
  
    const user = await createUserService({ name, email, password, preferences });
  
    return res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  });
  

// ✅ GET ALL USERS
export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await getAllUsersService();

    if (!users) {
        return res.status(400).json(
            new ApiResponse(300, users, "Users fetched not found")
        );
    }
    return res.status(200).json(
        new ApiResponse(200, users, "Users fetched successfully")
    );
});

// ✅ GET USER BY ID
export const getUserById = asyncHandler(async (req, res) => {
    const user = await getUserByIdService(req.params.id);

    return res.status(200).json(
        new ApiResponse(200, user, "User fetched successfully")
    );
});

// ✅ UPDATE USER
export const updateUser = asyncHandler(async (req, res) => {
    const user = await updateUserService(req.params.id, req.body);

    return res.status(200).json(
        new ApiResponse(200, user, "User updated successfully")
    );
});

// ✅ DELETE USER
export const deleteUser = asyncHandler(async (req, res) => {
    await deleteUserService(req.params.id);

    return res.status(200).json(
        new ApiResponse(200, null, "User deleted successfully")
    );
});
