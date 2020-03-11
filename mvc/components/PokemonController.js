import {PokemonModel} from "./PokemonModel.js";
import {PokemonView} from "./PokemonView.js";

export class PokemonController {
    constructor() {
        this.model = new PokemonModel();
        // this.view = new PokemonView(this.handleClickRandomPokemon.bind(this));
        this.view = new PokemonView(()=>this.handleClickRandomPokemon());
    }

    async handleClickRandomPokemon(){
        let pokemons = await this.model.getRandomPokemon();
        this.view.renderPokemons(pokemons);
    }
}
