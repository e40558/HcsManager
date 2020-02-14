import { Component, Input } from '@angular/core';

@Component({
  selector: 'provider-thumbnail',
  templateUrl: './provider-thumbnail.component.html',
  styleUrls: ['./provider-thumbnail.component.css']
})

export class ProviderThumbnailComponent {
@Input() provider: any;
}

