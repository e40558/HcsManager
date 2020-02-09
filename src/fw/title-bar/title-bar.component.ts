import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {


  constructor(public screenService: ScreenService) { }

  ngOnInit() {
  }

}
