import { DatePipe, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { Salle } from 'src/app/models/salle';
import { EmployeeService } from 'src/app/services/employee.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-listreserv',
  templateUrl: './listreserv.component.html',
  styleUrls: ['./listreserv.component.css']
})
export class ListreservComponent implements OnInit {
  public reservations!: Reservation[]; 
  public salle: Salle=new Salle();
  public nomSalle ="";
  public datepipe!: DatePipe;
  constructor(
    public crudserv:ReservationService, public salleServ:SalleService,public userServ:EmployeeService,public fb: FormBuilder, 
    private router: Router,
  ) { }


  selectData(item : Reservation) {
    this.crudserv.choixmenu = "M";

    this.crudserv.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/addreservation']); 
  }

  private getReservations():void{
    this.crudserv.getAll().subscribe( 
      response => { 
        this.crudserv.list = response["hydra:member"];

    }
    );

  }

  private getSalles():void{
    this.salleServ.getAll().subscribe( 
      response => { 
        this.salleServ.list = response["hydra:member"];

    }
    );

  }

  private getUsers():void{
    this.userServ.getAll().subscribe( 
      response => { 
        this.userServ.list = response["hydra:member"];

    }
    );

  }

  

 

  getJour(jour: Date){
    return jour.toString().substring(0,10);
  }
  getTime(time: Time){
    return time.toString().substring(11,16);
  }
  getNameSalle(nom: string):string{
    var ss:any;
    for(ss in this.salleServ.list){
     // console.log(this.salleServ.list[ss].id.toString()+" "+nom);
      if(this.salleServ.list[ss].id.toString()==nom.substring(12)){
        return this.salleServ.list[ss].libelle;

      }
    }
    return "...";

  }

  getUser(nom: string):string{
    var ss:any;
    for(ss in this.userServ.list){
     // console.log(this.salleServ.list[ss].id.toString()+" "+nom);
      if(this.userServ.list[ss].id.toString()==nom.substring(11)){
        return this.userServ.list[ss].email;

      }
    }
    return "...";

  }

  removeData(id:number) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
      this.crudserv.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.getReservations();
          },
          error => console.log(error));
    }
  }
  
  ngOnInit(): void {
    
    this.getReservations();
    this.getSalles();
    this.getUsers();
    console.log(this.crudserv.list);
       
 
  }

}
