import User from "../../model/UserSchema.js";
import { ApiError } from "../../utils/ApiError.js";

// ✅ CREATE USER
export const createUserService = async ({ name, email, passwordHash }) => {
    const existUser = await User.findOne({ email });

    if (existUser) {
        throw new ApiError(409, "User already exists");
    }

    const user = await User.create({
        name,
        email,
        passwordHash,
    });

    return user;
};

// ✅ GET ALL USERS
export const getAllUsersService = async () => {
    return await User.find().select("-passwordHash");
};

// ✅ GET USER BY ID
export const getUserByIdService = async (id) => {
    const user = await User.findById(id).select("-passwordHash");

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return user;
};

// ✅ UPDATE USER
export const updateUserService = async (id, data) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    }).select("-passwordHash");

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return user;
};

// ✅ DELETE USER
export const deleteUserService = async (id) => {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return user;
};
