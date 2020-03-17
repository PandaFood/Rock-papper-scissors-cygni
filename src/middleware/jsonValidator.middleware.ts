import { NextFunction, Request, Response } from 'express';
import NoGameFoundException from '../exceptions/NoGameFoundException';
import Exception from 'exceptions/Exception';

export default function JSONValidatorMiddleware(error: Exception, request: Request, response: Response, next: NextFunction) {
        
    request.auth = {};
    

    next();
}