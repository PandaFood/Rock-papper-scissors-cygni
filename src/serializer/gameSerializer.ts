import { Game } from "game/game"
import { Player } from "game/models/player";



export default function serializeGame(game: Game) {

    let gameID = game.gameID;
    let timeCreated = game.timeCreated;
    let creator = game.creator;
    let opponent = game.opponent;
    let moveset = game.moveset.getName();

    let winner = game.getResult();


    return {
        "gameID": gameID,
        "timeCreated": timeCreated,
        "creator": {
            "name": creator.name,
            "move": creator.move
        },
        "opponent": {
            "name": opponent?.name,
            "move": opponent?.move
        },
        "moveset": moveset,
        "winner": winner,
    }
    

}