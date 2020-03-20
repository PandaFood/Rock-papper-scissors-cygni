import { NextFunction, Request, Response } from 'express';
import NoGameFoundException from '../exceptions/NoGameFoundException';
import Exception from 'exceptions/Exception';
import MalformedJSONException from '../exceptions/MalformedJSONException';

export default class JSONValidatorMiddleware {
    
    requireUsername(error: Exception, request: Request, response: Response, next: NextFunction){
        let name = request.body.name

        console.log(name);
        if(name){
            throw new MalformedJSONException("Missing name");
        }

        next();
    }

    requireUsernameAndMove(error: Exception, request: Request, response: Response, next: NextFunction){

        
        next();
    }

}