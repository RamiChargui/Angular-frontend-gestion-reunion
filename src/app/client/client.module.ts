import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { ClientComponent } from './client.component';
import { GestReservationComponent } from './gest-reservation.component';
import { AddReservationComponent } from './gestReservation/add-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListReservationComponent } from './gestReservation/list-reservation.component';
import { NewReclamationComponent } from './gestReservation/new-reclamation.component';
import { ListInviteComponent } from './gestReservation/list-invite.component';


@NgModule({
  declarations: [
    ClientComponent,
    GestReservationComponent,
    AddReservationComponent,
    ListReservationComponent,
    NewReclamationComponent,
    ListInviteComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientComponent,
    GestReservationComponent,
    AddReservationComponent,
    ListReservationComponent,
    NewReclamationComponent,
    ListInviteComponent
  ]
})
export class ClientModule { }
