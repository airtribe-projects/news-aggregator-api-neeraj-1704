
import Preference from "../../model/PreferenceSchema.js";
import { ApiError } from "../../utils/ApiError.js";


const getPreferencesByUserId = async (userId) => {
    const prefs = await Preference.findOne({ user: userId });

    if (!prefs) return [];

    return prefs.preferences || [];
};

const updatePreferencesByUserId = async (userId, preferences) => {
    if (!Array.isArray(preferences)) {
        throw new ApiError(400, "Preferences must be an array");
    }

    const updated = await Preference.findOneAndUpdate(
        { user: userId },
        { user: userId, preferences },
        { upsert: true, new: true }
    );

    return updated;
};

export { getPreferencesByUserId, updatePreferencesByUserId };