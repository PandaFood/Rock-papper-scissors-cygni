import Exception from "./Exception";

export default class NoSuchPlayerExistException extends Exception {
    constructor() {
      super(400, "No such player exists");

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = NoSuchPlayerExistException.name; 
    }
  }
   
