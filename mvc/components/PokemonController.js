import {ModelFacade} from "./models/ModelFacade.js";
import {PokemonView} from "./PokemonView.js";

export class PokemonController {
    constructor() {
        this.models = new ModelFacade();
        this.view = new PokemonView(()=>this.handleClickStrictPokemon());
    }

    async handleClickRandomPokemon(){
        let pokemons = await this.models.pokemon().getRandomPokemon();
        this.view.renderPokemons(pokemons);
    }

    async handleClickStrictPokemon(){
        let pokeName = this.view.search.value;
        let pokeResponse = await this.models.pokemon().getPokemonByName(pokeName);

        pokeResponse.statusCode === 200 ?
            this.models.pokemon().insertInstanceIntoBase(await pokeResponse.json()) :
            this.models.technology().insertInstanceIntoBase({name:pokeName});
        this.view.renderPokemons(this.models.pokemon().getBase());
        this.view.renderTechnologies(this.models.technology().getBase());
    }
}
