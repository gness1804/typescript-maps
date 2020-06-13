import { Company } from './Company';
import { User } from './User';

interface Entity {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string = 'map') {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  private addInfoWindow (marker: google.maps.Marker, entity: Entity): void {
    // conditionally render the text depending on which type of entity
    let content = 'I am a marker on the map.';
    if (entity instanceof User) {
      content = `Welcome to my living space. I am ${entity.name} and you are right where you need to be. I'm the user.`;
    } else if (entity instanceof Company) {
      content = `Welcome to ${entity.name}. It's nice here.`;
    }
    const infoWindow = new google.maps.InfoWindow({
      content,
    });

    infoWindow.open(this.googleMap, marker);
  }

  addMarker(entity: Entity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      }
    });

    marker.addListener('click', () => this.addInfoWindow(marker, entity));
  }
}
