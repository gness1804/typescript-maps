// import { Company } from './Company';
// import { User } from './User';

const mapWrapper = document.getElementById('map');

new google.maps.Map(mapWrapper, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
