import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from '../fw/content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScreenService } from './services/screen.service.service';



@NgModule({
   imports: [
    CommonModule
  ],
  declarations: [FrameworkBodyComponent, ContentComponent, TitleBarComponent, StatusBarComponent, TopBarComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
