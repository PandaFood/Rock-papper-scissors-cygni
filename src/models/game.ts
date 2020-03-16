import { Player } from "./player";

export interface Game {
    gameID: string;
    creator: Player;
    opponent: Player;
    finished: boolean;
    timeCreated: Date;
}