import { expect } from 'chai';
import 'mocha';
import { ClassicRuleset } from './classicRuleset';
import { Type } from 'game/models/type';


describe('Classic ruleset', () => {

  const cs = new ClassicRuleset();

  describe('Paper', () => {
    const result = cs.paper;
    let members = getWeaknessOfType(result);
 
    it('should be named paper', () => {
      expect(result).to.have.property("name", "paper");
    });
  
    it('should return a weakness to scissor', () => {  
      expect(members).to.include("scissor");
    });

    it('should not return a weakness to rock', () => {
      expect(members).to.not.include("rock");
    });
  });

  describe('Rock', () => {
    const result = cs.rock;    
    let members = getWeaknessOfType(result);

    it('should be named rock', () => {
      expect(result).to.have.property("name", "rock");
    });
  
    it('should return a weakness to paper', () => {  
      expect(members).to.include("paper");
    });

    it('should not return a weakness to scissor', () => {
      expect(members).to.not.include("scissor");
    });
  });

  describe('Scissor', () => {
    const result = cs.scissor;
    let members = getWeaknessOfType(result);

    it('should be named scissor', () => {
      expect(result).to.have.property("name", "scissor");
    });
  
    it('should return a weakness to rock', () => {  
      expect(members).to.include("rock");
    });

    it('should not return a weakness to paper', () => {
      expect(members).to.not.include("paper");
    });
  });
});  

function getWeaknessOfType(type: Type): Array<string>{
  let members: Array<string> = [];
  type.weakAgainst.forEach(function(types: Type){
    members.push(types.name);
  });

  return members;
}