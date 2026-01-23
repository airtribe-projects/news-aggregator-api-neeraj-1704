import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    passwordHash: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = model("User", userSchema);
export default User;