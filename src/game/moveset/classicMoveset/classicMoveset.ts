import { Move } from "../move"
import { Moveset } from "../moveset";

export class ClassicMoveset extends Moveset {

    constructor() {
        let name = "Classic";

        let rock = new Move("rock", ["paper"]);
        let paper = new Move("paper", ["scissor"]);
        let scissor = new Move("scissor", ["rock"]);


        super(name, [rock, paper, scissor ]);
    }





}
    
