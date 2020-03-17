import { v4 as uuid } from 'uuid';
import { Player } from "./models/player";
import GameAlreadyFullException from './../exceptions/GameAlreadyFullException';


export class Game {
    gameID: string;
    creator: Player;
    opponent?: Player;
    finished?: boolean;
    timeCreated: Date;

    constructor( creator: Player ){
        this.creator = creator;
        this.gameID = uuid();
        this.timeCreated = new Date();
    }

    addOpponent( player: Player){
        if(this.opponent){
            throw new GameAlreadyFullException();
        } else {
            this.opponent = player;
        }
    }

    makeMove( player: Player ){

    }

}