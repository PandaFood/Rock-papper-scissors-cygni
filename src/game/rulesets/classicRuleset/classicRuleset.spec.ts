import { expect } from 'chai';
import 'mocha';
import { Move } from './move'



describe('Classic ruleset', () => {
  const rock = Rock();
  const paper = new Paper();
  const scissor = new Scissor();

  it('should return a weakness between rock and scissor', () => {
    const result = rock.isBeatBy(scissor)
    expect(result).to.be.true;
  });

});