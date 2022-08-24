import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { Salle } from 'src/app/models/salle';
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
    public crudserv:ReservationService, public salleServ:SalleService,public fb: FormBuilder, 
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

  

  public getSalle(){
   
    this.salleServ.getData("/api/salles/1").subscribe(
      (response:Salle) => { this.nomSalle=response.libelle;
       
    }
    ); 
    return this.nomSalle;
    
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
    this.getSalle();
       
 
  }

}
