import { ApiError } from "../utils/ApiError.js";

export const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (err instanceof ApiError) {
        return res.status(statusCode).json({
            success: false,
            message,
            errors: err.errors || [],
        });
    }

    return res.status(statusCode).json({
        success: false,
        message,
    });
};
