import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ClientComponent } from './client.component';
import { AddReservationComponent } from './gestReservation/add-reservation.component';
import { ListInviteComponent } from './gestReservation/list-invite.component';
import { ListReservationComponent } from './gestReservation/list-reservation.component';
import { NewReclamationComponent } from './gestReservation/new-reclamation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login.component';
import { RegisterComponent } from './home/register.component';

const routes: Routes = [
  {path : 'client', component : ClientComponent,canActivate:[AuthGuard] ,children:[
    {path : 'home', component: HomeComponent},
    {path : 'new-reservation', component: AddReservationComponent},
    {path : 'list-reservation', component: ListReservationComponent},
    {path : 'new-reclamation', component: NewReclamationComponent},
    {path : 'list-invitation', component: ListInviteComponent},
    

    
  ]
},
{path : 'register', component: RegisterComponent},
{path : 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
