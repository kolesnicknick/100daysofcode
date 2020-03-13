export class PokemonView {
    constructor(cback) {
        this.search = document.querySelector('#searchPoke');
        this.btn = document.querySelector('.btn-poke');
        this.info = document.querySelector('.pokemon-info');
        this.techData = document.querySelector('.technologies-info')
        this.btn.addEventListener('click', cback)
    }

    renderPokemons(arr){
        console.log('RENDER POKS: '+arr);
        this.info.innerHTML = arr.map(this.transformPokemonToHTML).join('');
    }

    renderTechnologies(arr){
        console.log('RENDER TECHS: '+arr);
        this.info.innerHTML = arr.map(this.transformTechnologyToHTML).join('');
    }

    transformPokemonToHTML({name, photo}){
       return `<div class="card" style="width: 8rem;">
        <img src="${photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
        </div>
    </div>`
    }

    transformTechnologyToHTML({name, photo}){
        return `<div class="card" style="width: 8rem;">
        <img src="../wikilogow.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
        <a class="card-title" href="https://ru.wikipedia.org/wiki/${name}">${name}</a>
        </div>
    </div>`
    }
}
