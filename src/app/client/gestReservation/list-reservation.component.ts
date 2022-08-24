import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { Salle } from 'src/app/models/salle';
import { ReservationService } from 'src/app/services/reservation.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  public reservations!: Reservation[]; 
  constructor(
    public resServ:ReservationService,public salleServ:SalleService, public fb: FormBuilder, 
    private router: Router,
  ) { }

  private getReservations():void{
    this.resServ.getAll().subscribe( 
      response => { this.resServ.list = response["hydra:member"];
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
      console.log(this.salleServ.list[ss].id.toString()+" "+nom);
      if(this.salleServ.list[ss].id.toString()==nom.substring(12)){
        return this.salleServ.list[ss].libelle;

      }
    }
    return "...";

  }

  private getSalles():void{
    this.salleServ.getAll().subscribe( 
      response => { this.salleServ.list = response["hydra:member"];
    }
    );
  }
  selectData(item : Reservation) {
    this.resServ.choixmenu = "M";

    this.resServ.formData = this.fb.group(Object.assign({},item));
    
  }

  getData() {
   
    this.resServ.getAll().subscribe(
      response => { 
        
     this.resServ.list = response["hydra:member"];
    
    }
    );
  }

  
  

  ngOnInit(): void {
    this.getReservations();
   this.getSalles();
  }

}
