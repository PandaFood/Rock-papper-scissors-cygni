import {expect} from 'chai';
import 'mocha';
import { ClassicMoveset } from './classicMoveset';
import { Move } from '../move';
import NoSuchMoveExistsException from '../../../exceptions/NoSuchMoveExistsException';


describe('Classic moveset', () => {

    let moveset = new ClassicMoveset();
    let rock = 'rock';
    let paper = 'paper';
    let scissor = 'scissor';
    let result;

    it('should include rock', () => {
        result = moveset.getMove(rock);
        expect(result.getName()).to.equal(rock);
    });

    it('should include paper', () => {
        result = moveset.getMove(paper);
        expect(result.getName()).to.equal(paper);
    });

    it('should include scissor', () => {
        result = moveset.getMove(scissor);
        expect(result.getName()).to.equal(scissor);
    });

    it('getMove(): should return error if invalid move', () => {
        expect(() => {moveset.getMove("random invalid move")}).to.throw(NoSuchMoveExistsException);
    });

    it('isValidMove(): should return false if invalid move', () => {
        result = moveset.isValidMove("random invalid move");
        expect(result).to.be.false;
    });

    describe('Rules', () => {
        let rockMove = moveset.getMove(rock);
        let paperMove = moveset.getMove(paper);;
        let scissorMove = moveset.getMove(scissor);;

        describe('Scissor', () => {
            it('scissor is beat by rock', () => {
                result = scissorMove.isBeatBy(rockMove);
                expect(result).to.be.true;
            });
    
            it('scissor is not beat by paper', () => {
                result = scissorMove.isBeatBy(paperMove);
                expect(result).to.be.false;
            });
    
            it('scissor is not beat by scissor', () => {
                result = scissorMove.isBeatBy(scissorMove);
                expect(result).to.be.false;
            });
        });

        describe('Rock', () => {
            it('rock is beat by paper', () => {
                result = rockMove.isBeatBy(paperMove);
                expect(result).to.be.true;
            });
    
            it('rock is not beat by scissor', () => {
                result = rockMove.isBeatBy(scissorMove);
                expect(result).to.be.false;
            });
    
            it('rock is not beat by rock', () => {
                result = rockMove.isBeatBy(rockMove);
                expect(result).to.be.false;
            });
        });

        describe('Paper', () => {
            it('paper is beat by scissor', () => {
                result = paperMove.isBeatBy(scissorMove);
                expect(result).to.be.true;
            });
    
            it('paper is not beat by rock', () => {
                result = paperMove.isBeatBy(rockMove);
                expect(result).to.be.false;
            });
    
            it('paper is not beat by paper', () => {
                result = paperMove.isBeatBy(paperMove);
                expect(result).to.be.false;
            });
        });
    });
});
