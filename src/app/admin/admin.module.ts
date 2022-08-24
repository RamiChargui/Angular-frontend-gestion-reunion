import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from './home/home.module';
import { AdminComponent } from './admin.component';
import { GestressourcesModule } from './gestressources/gestressources.module';
import { ListdeptComponent } from './gestressources/listdept.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule,
    GestressourcesModule,
    ReactiveFormsModule,
   

  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
