import mongoose, { Schema } from "mongoose";
const preferenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categories: {
        type: [String],
        default: []
    },
    language: {
        type: String,
        default: "en"
    },
    country: {
        type: String,
        default: "in"
    }
})
const Preference = model("Preference", preferenceSchema);
export default Preference;