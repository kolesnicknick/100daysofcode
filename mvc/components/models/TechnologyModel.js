import {PokemonModelBase} from "./PokemonModelBase.js";

export class TechnologyModel extends PokemonModelBase {
    constructor() {
        super();
        this.base = [];
    }

    getBase() {
        return this.base
    }

    insertInstanceIntoBase() {
        this.base.push({
            name,
        });
    }

}
