import { Game } from "./game";
import { Player } from './models/player';
import { GameState } from './state/gameState';
import { GameStore } from "./store/gameStore";
import NoGameFoundException from "../exceptions/NoGameFoundException";
import { response } from "express";

export class GameOrchistrator {

    store: GameStore;

    constructor(gameStore: GameStore) { 
        this.store = gameStore
    }

    async createGame(creator: Player): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                let game = new Game(creator);
                this.store.add(game);
                resolve(game.gameID);
            } catch (error) {
                reject(error)
            }
        });
    }

    async joinGame(gameID: string, player: Player){
        return new Promise((resolve, reject) => {
            this.getGame(gameID).then( (game) => {
                game.addOpponent(player);
                resolve();
            }).catch(error => {
                reject(error)
            });
        });
    }

    async registerMove(gameID: string, player: Player){
        this.getGame(gameID).then( (game) => {
            
        })
    }

    async getGame(gameID: string): Promise<Game> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.store.get(gameID));
            } catch (error) {
                reject(error)
            }
        });
    }

}