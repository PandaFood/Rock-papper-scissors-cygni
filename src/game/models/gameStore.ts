import { Game } from "game/game";

export interface GameStore {
    
    get(gameID: string): Game
    add(game: Game): void
}