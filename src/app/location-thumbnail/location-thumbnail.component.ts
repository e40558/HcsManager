import { Component, Input } from '@angular/core';

@Component({
  selector: 'location-thumbnail',
  templateUrl: './location-thumbnail.component.html',
  styleUrls: ['./location-thumbnail.component.css']
})

export class LocationThumbnailComponent {
@Input() location: any;
}

