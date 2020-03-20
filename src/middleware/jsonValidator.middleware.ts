import { NextFunction, Request, Response } from 'express';
import MalformedJSONException from '../exceptions/MalformedJSONException';

export default class JSONValidatorMiddleware {
    
    name(request: Request, response: Response, next: NextFunction){
        let field = request.body.name;

        if(typeof(field) === "string"){
            next();
        } else {
            throw new MalformedJSONException("Missing name field");
        }
    }

    move(request: Request, response: Response, next: NextFunction){
        let field = request.body.move;
        
        if(typeof(field) === "string"){
            next();
        } else {
            throw new MalformedJSONException("Missing name field");
        }
    }

}