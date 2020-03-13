export class PokemonModelBase {
    constructor() {
        if (this.constructor === PokemonModelBase) {
            throw new TypeError('Abstract class "PokemonModelBase" cannot be instantiated directly.');
        }
    }

    getBase() {
        console.log('Not implemented')
    }

    insertInstanceIntoBase(data) {
        console.log('Not implemented')
    }
}
