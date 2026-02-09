
import fetchPersonalizedNews from "../news/NewsService.js";
import {asyncHandler} from "../../utils/asyncHandler.js";
import {ApiResponse} from "../../utils/ApiResponse.js"

export const getPersonalizedNews = asyncHandler(async (req, res) => {
    if (!req.user || !req.user._id) {
      throw new ApiError(401, "Unauthorized");
    }
  
    const news = await fetchPersonalizedNews(req.user._id);
  
    return res.status(200).json(
      new ApiResponse(
        200,
        { news: news ?? [] },
        "Personalized news fetched successfully"
      )
    );
  });
  
