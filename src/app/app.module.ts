import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { LocationListComponent } from './locations/locations-list.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderThumbnailComponent } from './provider-thumbnail/provider-thumbnail.component';
import { LocationThumbnailComponent } from './location-thumbnail/location-thumbnail.component';
import { NotificationComponent } from './notification/notification.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './core/notification.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    LocationListComponent,
    ProviderComponent,
    ProviderThumbnailComponent,
    LocationThumbnailComponent,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FwModule,
    ToastrModule.forRoot(
      {
        positionClass: 'top-left',
        closeButton: true,

      }
    ),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    NotificationService,
    AppDataService,
    AuthGuard,
    { provide: UserApi, useExisting: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
