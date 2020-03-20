import Exception from "./Exception";

export default class MalformedJSONException extends Exception {
    constructor(message?: string) {
      super(400, "The JSON Payload was malformed, Error: \n" + message);

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = MalformedJSONException.name; 
    }
  }
   
