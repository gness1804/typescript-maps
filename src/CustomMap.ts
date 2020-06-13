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

  addMarker(entity: Entity): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      }
    });
  }
}
