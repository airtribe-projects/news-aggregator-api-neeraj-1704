import mongoose, { Schema, model } from "mongoose";

const preferenceSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // one preference doc per user
            index: true,
        },
        preferences: {
            type: [String],
            default: [],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Preference = model("Preference", preferenceSchema);
export default Preference;
