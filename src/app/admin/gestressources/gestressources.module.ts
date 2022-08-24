import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GestressourcesRoutingModule } from './gestressources-routing.module';
import { ListdeptComponent } from './listdept.component';
import { NewdeptComponent } from './newdept.component';
import { ListmatComponent } from './listmat.component';
import { NewmatComponent } from './newmat.component';
import { ListsalleComponent } from './listsalle.component';
import { NewsalleComponent } from './newsalle.component';
import { ListreservComponent } from './listreserv.component';
import { NewreservComponent } from './newreserv.component';
import { ListempComponent } from './listemp.component';
import { ListreclamComponent } from './listreclam.component';
import { EditdeptComponent } from './editdept.component';


@NgModule({
  declarations: [
    ListdeptComponent,
    NewdeptComponent,
    ListmatComponent,
    NewmatComponent,
    ListsalleComponent,
    NewsalleComponent,
    ListreservComponent,
    NewreservComponent,
    ListempComponent,
    ListreclamComponent,
    EditdeptComponent
  ],
  imports: [
    CommonModule,
    GestressourcesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ListdeptComponent,
    NewdeptComponent,
    ListmatComponent,
    NewmatComponent,
    ListsalleComponent,
    NewsalleComponent,
    ListreservComponent,
    NewreservComponent,
    ListempComponent,
    ListreclamComponent,
    EditdeptComponent
  ]
})
export class GestressourcesModule { }
