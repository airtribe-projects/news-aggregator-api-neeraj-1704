import { asyncHandler } from "../../utils/asyncHandler.js";
import {
    getPreferencesByUserId,
    updatePreferencesByUserId,
} from "./PreferenceService.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const getPreferences = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const preferences = await getPreferencesByUserId(userId);

    return res.status(200).json(
        new ApiResponse(
            200,
            { preferences },
            "Preferences fetched successfully"
        )
    );
});

export const updatePreferences = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { preferences } = req.body;

    await updatePreferencesByUserId(userId, preferences);

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Preferences updated successfully"
        )
    );
});
