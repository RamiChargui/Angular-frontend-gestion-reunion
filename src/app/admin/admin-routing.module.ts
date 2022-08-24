import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdminComponent } from './admin.component';
import { EditdeptComponent } from './gestressources/editdept.component';
import { ListdeptComponent } from './gestressources/listdept.component';
import { ListempComponent } from './gestressources/listemp.component';
import { ListmatComponent } from './gestressources/listmat.component';
import { ListreclamComponent } from './gestressources/listreclam.component';
import { ListreservComponent } from './gestressources/listreserv.component';
import { ListsalleComponent } from './gestressources/listsalle.component';
import { NewdeptComponent } from './gestressources/newdept.component';
import { NewmatComponent } from './gestressources/newmat.component';
import { NewreservComponent } from './gestressources/newreserv.component';
import { NewsalleComponent } from './gestressources/newsalle.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'admin', component : AdminComponent,canActivate:[AuthGuard] ,children:[
    {path : 'editdept/:id', component: EditdeptComponent},
    {path : 'homeadmin', component: HomeComponent},
    {path : 'listdepartment', component: ListdeptComponent},
    {path : 'adddepartment', component: NewdeptComponent},
    {path : 'listsalle', component: ListsalleComponent},
    {path : 'addsalle', component: NewsalleComponent},
    {path : 'listmateriel', component: ListmatComponent},
    {path : 'addmateriel', component: NewmatComponent},
    {path : 'listreservation', component: ListreservComponent},
    {path : 'addreservation', component: NewreservComponent},
    {path : 'listreclamation', component: ListreclamComponent},
    {path : 'listemployee', component: ListempComponent},
    
    
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
