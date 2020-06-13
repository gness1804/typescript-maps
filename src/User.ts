import * as faker from "faker";
import { Location } from './types/Location';

export class User {
  name: string;
  location: Location;
  message: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.message = `Welcome to my living space. I am ${this.name} and you are right where you need to be. I'm the user.`;
  }
}
