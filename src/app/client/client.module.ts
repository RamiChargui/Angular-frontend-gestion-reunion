import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { ClientComponent } from './client.component';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
