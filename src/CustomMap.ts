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

  private addInfoWindow (marker: google.maps.Marker): void {
    const infoWindow = new google.maps.InfoWindow({
      content: 'Hello',
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

    marker.addListener('click', () => this.addInfoWindow(marker));
  }
}
