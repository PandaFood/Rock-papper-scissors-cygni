import {expect} from 'chai';
import 'mocha';
import {Game} from './game';
import {Player} from './models/player';
import {ClassicMoveset} from './moveset/classicMoveset/classicMoveset';
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

        it('should have a creator named ' + playerName, () => {
            result = game.creator;
            expect(result).to.have.property("name", playerName);
        });

        it('should have the default ruleset', () => {
            result = game.moveset;
            expect(result).to.be.instanceof(ClassicMoveset);
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

        });

        describe('should be a result if both have played', () => {

        });



    });

});
