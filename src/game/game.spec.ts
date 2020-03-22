import {expect} from 'chai';
import 'mocha';
import {Game} from './game';
import {Player} from './models/player';
import {ClassicMoveset} from './moveset/classicMoveset/classicMoveset';
import NoSuchPlayerExistException from '../exceptions/NoSuchPlayerExistException';
import NoSuchMoveExistsException from '../exceptions/NoSuchMoveExistsException';
import PlayerHasAlreadyMadeMoveException from '../exceptions/PlayerHasAlreadyMadeMoveException';
import GameAlreadyFullException from '../exceptions/GameAlreadyFullException';


describe('Game class', () => {
    const playerName = "Testie";
    const opponentName = "Testy";

    let game: Game;
    let result: any;
    let player: Player = {
        name: playerName
    }
    let opponent: Player = {
        name: opponentName
    }

    describe('Create game with default ruleset', () => {
        game = new Game(player);

        it('should have a UUID', () => {
            result = game.gameID;
            expect(result).to.exist;
        });

        it('should have the default ruleset', () => {
            result = game.moveset;
            expect(result).to.be.instanceof(ClassicMoveset);
        });

        describe('Creator', () => {
            it('should start with a creator named ' + playerName, () => {
                result = game.creator;
                expect(result).to.have.property("name", playerName);
            });
        });

        describe('Opponents', () => {
            it('should not start with an opponent', () => {
                result = game.opponent;
                expect(result).to.not.exist;
            });
    
            it('should be able to add opponent', () => {
                game.addOpponent(opponent);
                result = game.opponent;
                expect(result).to.have.property("name", opponentName);
            });

            it('should have a opponent named ' + opponentName, () => {
                result = game.opponent;
                expect(result).to.have.property("name", opponentName);
            });

            it('should return error if a opponent already joined', () => {
                expect(() => {game.addOpponent(opponent)}).to.throw(GameAlreadyFullException);
            });
            
        });

        describe('Move', () => {
            it('should not contain a move first', () => {
                result = game.creator.move;
                expect(result).to.be.undefined;
            });

            it('should contain a move after its made', () => {
                let move = "scissor";
                game.makeMove(player, move);
                result = game.creator.move;
                expect(result).to.equal(move);
            });

            it('should return error if move is already made', () => {
                let move = "scissor";
                expect(() => {game.makeMove(player, move)}).to.throw(PlayerHasAlreadyMadeMoveException);
            });

            it('should return error if move doesnt exist in moveset', () => {
                let move = "nonexisting move";
                expect(() => {game.makeMove(opponent, move)}).to.throw(NoSuchMoveExistsException);
            });

            it('should return error if player doesnt exist', () => {
                let move = "scissor";
                expect(() => {game.makeMove( {name: "dont exist"} , move)}).to.throw(NoSuchPlayerExistException);
            });
        });
    });

});

