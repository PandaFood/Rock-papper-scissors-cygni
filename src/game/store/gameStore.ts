import { Game } from "game/game";
import NoGameFoundException from "./../../exceptions/NoGameFoundException";

export interface GameStore {
    
    get(gameID: string): Game
    add(game: Game): void
    remove(gameID: string): void
}