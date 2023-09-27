import { NextFunction, Request, Response } from "express";

export default class AppError {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }

    static errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
    
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
}