import MapOptions = google.maps.MapOptions;
import Map = google.maps.Map;

import { User } from './User';
import { Company } from './Company';
import {IMappable} from "./ILocation";

export class GmapsWrapper {
  private readonly map: Map;
  constructor(locator: string, opts: MapOptions) {
    this.map = new Map(document.querySelector(locator), opts);
  }

  addMarker(position: IMappable): void {
    new google.maps.Marker({map: this.map, position: position.location});
  }
}
