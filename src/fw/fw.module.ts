import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from '../fw/content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScreenService } from './services/screen.service.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from '../menus/menu/menu.component';
import { MenuItemComponent } from '../menus/menu-item/menu-item.component';
import { PopupMenuComponent } from '../menus/popup-menu/popup-menu.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';



@NgModule({
   imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    StatusBarComponent,
    TopBarComponent,
    ScreenBelowLarge,
    ScreenLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
