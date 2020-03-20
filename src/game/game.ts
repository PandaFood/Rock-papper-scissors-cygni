import { v4 as uuid } from 'uuid';
import { Player } from "./models/player";
import GameAlreadyFullException from './../exceptions/GameAlreadyFullException';
import NoSuchPlayerExistException from './../exceptions/NoSuchPlayerExistException';
import { Moveset } from './moveset/moveset';
import { ClassicMoveset } from './moveset/classicMoveset/classicMoveset';
import NoSuchMoveExistsException from '../exceptions/NoSuchMoveExistsException';
import PlayerHasAlreadyMadeMoveException from '../exceptions/PlayerHasAlreadyMadeMoveException';


export class Game {
    gameID: string;
    creator: Player;
    opponent?: Player;
    finished?: boolean;
    timeCreated: Date;
    moveset: Moveset = new ClassicMoveset();

    constructor(creator: Player, moveset?: Moveset){
        this.creator = creator;
        this.gameID = uuid();
        this.timeCreated = new Date();
        this.moveset = moveset ? moveset : this.moveset;
    }

    getResult(): string {
        if(this.creator.move && this.opponent?.move){
            let result = this.returnWinner(this.creator, this.opponent)

            if(result){
                return result.name;
            } else {
                return "TIE"
            }
        } else {
            return "No winner yet";
        }
    }

    private returnWinner(player1: Player, player2: Player) : Player | undefined {
        if(player1.move && player2.move){
            let player1Move = this.moveset.getMove(player1.move);
            let player2Move = this.moveset.getMove(player2.move);

            let player1isBeat = player1Move.isBeatBy(player2Move);
            let player2isBeat = player2Move.isBeatBy(player1Move);
            
            if(player1isBeat && player2isBeat){
                return;
            } else if (player1isBeat) {
                return player2;
            } else if (player2isBeat) {
                return player1;
            } else {
                return;
            }

        } else {
            return;
        }
    }
    
    addOpponent(player: Player){
        if(this.opponent){
            throw new GameAlreadyFullException();
        } else {
            this.opponent = player;
        }
    }

    makeMove(player: Player, move: string){
        player = this.matchPlayerToLocalPlayer(player);

        if(this.hasAlreadyMadeAMove(player)){
            throw new PlayerHasAlreadyMadeMoveException();
        } else if(this.moveset.isValidMove(move)){
            player.move = move;
        } else {
            throw new NoSuchMoveExistsException();
        }
    }

    private hasAlreadyMadeAMove(player: Player): boolean {
        if(player.move){
            return true;
        } else {
            return false;
        }
    }

    private matchPlayerToLocalPlayer(player: Player): Player {
        if(player.name == this.creator.name){
            return this.creator;
        } else 
        if(player.name == this.opponent?.name){
            return this.opponent;
        } else {
            throw new NoSuchPlayerExistException();
        }
    }
}