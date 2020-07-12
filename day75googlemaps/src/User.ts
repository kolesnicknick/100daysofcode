import * as faker from 'faker';
import {ILocation, IMappable} from "./ILocation";
export class User implements IMappable{
    constructor(location?: ILocation) {
        this.name = faker.name.findName();
        this.location = location || <ILocation> { lat:+faker.address.latitude(), lng:+faker.address.latitude() };
    }

    name: string;
    location: ILocation

    toString(){
        return `${this.name} is located on x:${this.location.lng}, y:${this.location.lat}`
    }
}
