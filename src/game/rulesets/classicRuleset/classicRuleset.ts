import { Type } from "../../models/type"
import { Ruleset } from "../ruleset";

export class ClassicRuleset implements Ruleset {



    rock: Type = {
        name: "rock",
        weakAgainst: []
    }
    paper: Type = {
        name: "paper",
        weakAgainst: []
    }
    scissor: Type = {
        name: "scissor",
        weakAgainst: []
    }

    constructor() {
        this.rock.weakAgainst = [this.paper];
        this.paper.weakAgainst = [this.scissor];
        this.scissor.weakAgainst = [this.rock];
    }
    



}
    
