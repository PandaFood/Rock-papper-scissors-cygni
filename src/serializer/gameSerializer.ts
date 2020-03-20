import { Game } from "game/game"
import { Player } from "game/models/player";

export default function serializeGame(game: Game) {

    let gameID = game.gameID;
    let timeCreated = game.timeCreated;
    let creator = game.creator;
    let creatorMove;
    let opponent = game.opponent;
    let opponentMove;
    let moveset = game.moveset.getName();

    let winner = game.getResult();
    let loser;
    let winningString = "";


    if(winner?.name == "Draw"){
        winningString = `It's a draw between ${creator.name}s ${creator.move} and ${opponent?.name}s ${opponent?.move}`
    } else if (winner?.name) {
        if(winner == creator){
            loser = opponent;
        } else {
            loser = creator;
        }
        winningString = `The winner is ${winner.name} with ${winner.move} against ${loser?.name}s ${loser?.move}`
    }

    return {
        "gameID": gameID,
        "timeCreated": timeCreated,
        "creator": {
            "name": creator.name
        },
        "opponent": {
            "name": opponent?.name,
        },
        "moveset": moveset,
        "winner": winningString
    }
    

}