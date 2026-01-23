import mongoose, { Schema } from "mongoose";

const newsCacheSchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    articles: {
        type: Array,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const NewsCache = model("NewsCache", newsCacheSchema);
export default NewsCache;