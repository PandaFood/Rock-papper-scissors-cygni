import Exception from "./Exception";

export default class NoGameFoundException extends Exception {
    constructor() {
      super(404, "No game found");

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = NoGameFoundException.name; 
    }
  }
   
