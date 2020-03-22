import {expect} from 'chai';
import 'mocha';
import {Game} from '../../game';
import { InMemoryStore } from './inMemoryStore';
import { Player } from 'game/models/player';
import NoGameFoundException from '../../../exceptions/NoGameFoundException';


describe('InMemoryStore class', () => {

    describe('Create an InMemoryStore', () => {
        let store = new InMemoryStore();
        let player : Player = {"name": "John"};
        let game = new Game(player);
        let result;

        it('should be able to store a game', () => {
            store.add(game);
            result = store.gameList;
            expect(result).to.include(game);
        });

        it('should be able to find a game', () => {
            result = store.get(game.gameID);
            expect(result).to.equal(game);
        });

        it('should return error if no matching game is found', () => {
            // The anonymous function is needed because of typescripts transpiling.
            expect(() => {store.get('not an id')}).to.throw(NoGameFoundException);
        });
    });
});
