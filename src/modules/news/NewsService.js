import crypto from "crypto";
import Preference from "../../model/PreferenceSchema.js";
import apiClient from "../cache/apiClient.js";
import { getCache, setCache } from "../cache/cache.js";
import { newsApiKey } from "../../cofig/env.js";

const CACHE_TTL = 300;

const fetchPersonalizedNews = async (userId) => {
    const preferencesDoc = await Preference.findOne({ user: userId });
    const preferences = preferencesDoc?.preferences || [];

    console.log(" User Preferences:", preferences);

    const cacheKey = buildCacheKey(userId, preferences);

    const cachedNews = getCache(cacheKey);
    if (cachedNews) {
        console.log("Returning news from cache...");
        return cachedNews;
    }

    const query =
        preferences.length > 0 ? preferences.join(" ") : "latest";

    try {
        console.log("Fetching fresh news from GNews API...");

        const response = await apiClient.get("/search", {
            params: {
                q: query,
                lang: "en",
                max: 10,
                apikey: newsApiKey,
            },
        });

        const normalizedArticles = normalizeArticles(
            response.data.articles || []
        );

        setCache(cacheKey, normalizedArticles, CACHE_TTL);

        console.log(" Fresh news cached successfully");

        return normalizedArticles;
    } catch (err) {
        console.error("Failed to fetch news:", err.response?.data || err.message);
        return [];
    }
};

const normalizeArticles = (articles = []) => {
    return articles.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        source: article.source?.name,
        publishedAt: article.publishedAt,
    }));
};

const buildCacheKey = (userId, preferences) => {
    return `news:${crypto
        .createHash("md5")
        .update(JSON.stringify({ userId, preferences }))
        .digest("hex")}`;
};

export default fetchPersonalizedNews;
