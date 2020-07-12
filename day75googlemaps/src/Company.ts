import * as faker from "faker";
import {ILocation, IMappable} from "./ILocation";

export class Company implements IMappable{
    companyName: string;
    catchPhrase: string;
    location: ILocation

    constructor(location?: ILocation) {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = location || <ILocation>{lat:+faker.address.latitude(), lng:+faker.address.latitude()}
    }
}
