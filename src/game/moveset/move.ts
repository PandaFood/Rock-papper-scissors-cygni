export class Move {

    private name: string;
    private weakAgainst: Array<string>;

    constructor(name: string, weakAgainst: Array<string>){
        this.name = name;
        this.weakAgainst = weakAgainst;
    }

    isBeatBy(type: Move): boolean {
        if(this.weakAgainst.includes(type.getName())){
            return true;
        } else {
            return false;
        }
    };

    getName(): string {
        return this.name;
    }

    getWeakAgainst(): Array<string>{
        return this.weakAgainst;
    }
}