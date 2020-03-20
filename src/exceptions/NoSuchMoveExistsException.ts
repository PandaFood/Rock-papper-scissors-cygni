import Exception from "./Exception";

export default class NoSuchMoveExistsException extends Exception {
    constructor() {
      super(400, "No such move exists");

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = NoSuchMoveExistsException.name; 
    }
  }
   
