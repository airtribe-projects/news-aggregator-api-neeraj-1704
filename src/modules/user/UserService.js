import { bcryptSaltRounds } from "../../cofig/env.js";
import Preference from "../../model/PreferenceSchema.js";
import User from "../../model/UserSchema.js";
import { ApiError } from "../../utils/ApiError.js";
import bcrypt from "bcrypt"
// ✅ CREATE USER
export const createUserService = async ({ name, email, password, preferences = [] }) => {


    const existUser = await User.findOne({ email });

    if (existUser) {
        throw new ApiError(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password,bcryptSaltRounds);

    const newUser = await User.create({
        name,
        email,
        passwordHash: hashedPassword,
    });

    // create prefereneces if provided

    if(preferences && preferences.length > 0 ) {
        await Preference.create({
            user : newUser._id,
            preferences : preferences
        })
    }

    return newUser;
};

// ✅ GET ALL USERS
export const getAllUsersService = async () => {
    return await User.find({ isDeleted: false }).select("-passwordHash");
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

// ✅ DELETE USER  SOF
export const deleteUserService = async (id) => {
    const user = await User.findOneAndUpdate(
        {_id : id , isDeleted : false},
        {isDeleted : true},
        {new : true},
    );
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return user;
};
