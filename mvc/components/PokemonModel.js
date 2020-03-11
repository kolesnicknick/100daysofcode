export class PokemonModel {
    constructor() {
        this.link ='https://pokeapi.co/api/v2/pokemon/';
        this.pokemonMax = 807;
        this.base = [];
    }

    async getRandomPokemon(){
        const id = Math.floor(Math.random()*this.pokemonMax+1);
        return await fetch(`${this.link}${id}`).then(r=>r.json()).then(data=>{
            console.log(data)
            this.base.push({
                id,
                name: data.name,
                photo: data.sprites.front_default
            });
            return this.base;
        })
    }
}
