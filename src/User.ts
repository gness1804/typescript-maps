import faker from "faker";

interface Location {
  lat: number;
  lng: number;
}

class User {
  // name: string;
  // location: Location;

  constructor(public name: string, public location: Location) {

  }
}
