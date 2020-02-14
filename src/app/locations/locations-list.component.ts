import { Component } from '@angular/core';

@Component({
selector: 'app-event-list',
templateUrl: './locations-list.component.html',

})
export  class LocationListComponent {
  locations = [ {
  name: 'Wood',
  created: '9/26/2036',
  locationCode: '1234',
  street: '622 Southwood Drive',
  city: 'Duncanville',
  zip: '75137',
  state: 'TX',
  county: 'Dallas',
  PpoviderId: 1,
  imageSource: '/assets/images/angularconnect-shield.png',
  },
  {
    name: 'West',
    created: '9/26/2036',
    locationCode: '1234',
    street: '622 Southwood Drive',
    city: 'Duncanville',
    zip: '75137',
    state: 'TX',
    county: 'Dallas',
    PpoviderId: 1,
    imageSource: '/assets/images/angularconnect-shield.png',
    },
];

}

