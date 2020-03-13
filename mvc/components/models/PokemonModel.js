import {PokemonModelBase} from "./PokemonModelBase.js";

export class PokemonModel extends PokemonModelBase{
    constructor() {
        super();
        this.link ='https://pokeapi.co/api/v2/pokemon/';
        this.pokemonMax = 807;
        this.base = [];
    }

    async getRandomPokemon(){
        const id = Math.floor(Math.random()*this.pokemonMax+1);
        return await fetch(`${this.link}${id}`).then(r=>r.json()).then(data=>{
            console.log(data);
            this.base.push({
                id,
                name: data.name,
                photo: data.sprites.front_default
            });
            return this.base;
        })
    }

    async getPokemonByName(name){
        return fetch(`${this.link}${name}`);
    }

    getPokemons(){
        return this.base;
    }

    addPokemonToBase(data){
        this.base.push({
            id: data.id,
            name: data.name,
            photo: data.sprites.front_default
        });
    }
}
