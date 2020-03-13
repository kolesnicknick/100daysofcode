
export class TechnologyModel{
    constructor() {
        this.techbase = [];
    }

    getBase() {
        return this.techbase
    }

    insertInstanceIntoBase(data) {
        console.log('tech inserting ' + data.name)
        this.techbase.push({
            name: data.name,
        });
    }

}
