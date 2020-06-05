import * as faker from "faker";
import { Location } from './types/Location';

export class Company {
  name: string; // companyName in the original course
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
