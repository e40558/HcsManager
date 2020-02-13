import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

   provider = {
    providerName: 'Above and Beyond Healthcare',
    componentCode: '44w',
    programDirector: 'Temisha Greer',
    contractNo: '1234567',
    created: '9/26/2036',
    street: '622 Southwood Drive',
    city: 'Duncanville',
    zip: '75137',
    state: 'TX',
    county: 'Dallas',
    PpoviderId: 1,
    imageSource: '/assets/images/angularconnect-shield.png',
    };

  constructor() { }

  ngOnInit() {
  }

}
