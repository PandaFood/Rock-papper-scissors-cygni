import Exception from "./Exception";

export default class PlayerHasAlreadyMadeMoveException extends Exception {
    constructor() {
      super(400, "That player has already made a move");

      // Enables the exception type to be found
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = PlayerHasAlreadyMadeMoveException.name; 
    }
  }
   
