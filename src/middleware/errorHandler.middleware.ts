import { NextFunction, Request, Response } from 'express';
import NoGameFoundException from '../exceptions/NoGameFoundException';
import Exception from 'exceptions/Exception';

export default function errorHandlerMiddleware(error: Exception, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Internal server error';
    
    return response.status(status).json({
        "error": message,
    })
}