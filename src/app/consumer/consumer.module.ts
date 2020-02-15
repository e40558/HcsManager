import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { ConsumerEditComponent } from './consumer-edit/consumer-edit.component';


@NgModule({
  declarations: [ConsumerListComponent, ConsumerDetailComponent, ConsumerEditComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }
