import {PokemonModel} from "./PokemonModel.js";
import {TechnologyModel} from "./TechnologyModel.js";

export class ModelFacade {
    constructor() {
        this.poke = new PokemonModel();
        this.tech = new TechnologyModel();
    }
    pokemon(){
        return this.poke;
    }
    technology(){
        return this.tech;
    }

}
