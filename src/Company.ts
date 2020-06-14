import * as faker from "faker";
import { Location } from "./types/Location";
import { Entity } from './CustomMap';

export class Company implements Entity {
  name: string; // companyName in the original course
  catchPhrase: string;
  location: Location;
  message: string;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.message = `<div>
    <h1>Welcome to ${this.name}.</h1>

    <h3>"${this.catchPhrase}"</h3>

    </div>
    `;
  }
}
