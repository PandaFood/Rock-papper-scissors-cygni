import { GameStore } from "../gameStore";
import { Game } from "game/game";
import NoGameFoundException from "../../../exceptions/NoGameFoundException";

export class InMemoryStore implements GameStore {

    gameList: Array<Game>;

    constructor(){
        this.gameList = new Array<Game>();
    }

    get(gameID: string) {
        let requestedGame = this.findGame(gameID);
        return requestedGame;
    }

    add(game: Game) {
        this.gameList.push(game);
    }

    remove(gameID: string) {
        
    }

    private findGame(gameID: string){
        let foundGame;
        this.gameList.forEach( (game) => {
            if(game.gameID == gameID){
                foundGame = game;
            }
        });
        
        if(foundGame){
            return foundGame;
        } else {
            throw new NoGameFoundException();
        }

    }
}