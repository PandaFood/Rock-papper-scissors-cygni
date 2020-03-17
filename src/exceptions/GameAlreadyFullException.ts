import Exception from "./Exception";

export default class GameAlreadyFullException extends Exception {
    constructor() {
      super(404, "The game is already full");

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = GameAlreadyFullException.name; 
    }
  }
   
