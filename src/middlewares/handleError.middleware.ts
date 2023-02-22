import { AppError } from "../errors/appError"
import { Request, Response, NextFunction, ErrorRequestHandler } from "express"

export const handleErrorMiddleware: ErrorRequestHandler = async (
    error,
    req,
    res,
    next
) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        })
    }
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
    })
}