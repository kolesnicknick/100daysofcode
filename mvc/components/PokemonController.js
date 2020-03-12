import {PokemonModel} from "./PokemonModel.js";
import {PokemonView} from "./PokemonView.js";

export class PokemonController {
    constructor() {
        this.model = new PokemonModel();
        this.view = new PokemonView(()=>this.handleClickStrictPokemon());
    }

    async handleClickRandomPokemon(){
        let pokemons = await this.model.getRandomPokemon();
        this.view.renderPokemons(pokemons);
    }

    async handleClickStrictPokemon(){
        let pokeName = this.view.search.value;
        let pokemons = await this.model.getPokemonByName(pokeName);
        this.view.renderPokemons(pokemons);
    }
}
