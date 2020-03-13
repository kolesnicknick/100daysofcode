
export class PokemonModel{
    constructor() {
        this.link ='https://pokeapi.co/api/v2/pokemon/';
        this.pokemonMax = 807;
        this.pokebase = [];
    }

    async getRandomPokemon(){
        const id = Math.floor(Math.random()*this.pokemonMax+1);
        return await fetch(`${this.link}${id}`).then(r=>r.json()).then(data=>{
            console.log(data);
            this.pokebase.push({
                id,
                name: data.name,
                photo: data.sprites.front_default
            });
            return this.pokebase;
        })
    }

    async getPokemonByName(name){
        return fetch(`${this.link}${name}`);
    }

    getBase(){
        console.log('returning base ');
        return this.pokebase;
    }

    insertInstanceIntoBase(data){
        console.log('poke inserting ' + data.name);
        this.pokebase.push({
            id: data.id,
            name: data.name,
            photo: data.sprites.front_default
        });
    }
}
