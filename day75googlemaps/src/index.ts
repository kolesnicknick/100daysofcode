import {User} from './User';
import {Company} from "./Company";
import {GmapsWrapper} from "./GmapsWrapper";
import {ILocation} from "./ILocation";

const company: Company = new Company(<ILocation>{ lat:5.9564952, lng:80.4183401 } );
const user: User = new User(<ILocation>{ lat:5.941992, lng:80.4603961 } );

const map: GmapsWrapper = new GmapsWrapper('#map', {
    zoom: 16,
    center: <ILocation>{
        lat: 5.944743,
        lng: 80.458900,
    }
});

map.addMarker(user);
map.addMarker(company);


