import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { AuthenticatedUserComponent } from '../authenticated-user/authenticated-user.component';
import { AuthGuard } from '../services/auth-guard.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
