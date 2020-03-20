import { Move } from "./move";
import NoSuchMoveExistsException from "../../exceptions/NoSuchMoveExistsException";

export abstract class Moveset {    


    private name = "string";
    private moves = new Array<Move>();
    
    constructor(name: string, moves: Array<Move>){
        this.name = name;
        this.moves = moves;
    }

    isValidMove(name: string): boolean {
        let currentMove = this.getMove(name)

        if(currentMove) {
            return true;
        } else {
            return false;
        }
    }

    getMove(name: string): Move {
        let currentMove;
        this.moves.forEach(move => {
            if(move.getName().toLowerCase() == name.toLowerCase()){
                currentMove = move;
                return;
            }
        });

        if(currentMove) {
            return currentMove;
        } else {
            throw new NoSuchMoveExistsException();
        }
    }

    getMoves(): Array<Move> {
        return this.moves;
    }

    getName(): string {
        return this.name;
    }    
}