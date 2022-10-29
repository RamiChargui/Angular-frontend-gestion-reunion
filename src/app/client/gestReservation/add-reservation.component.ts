import { Time } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListreclamComponent } from 'src/app/admin/gestressources/listreclam.component';
import { Department } from 'src/app/models/department';
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { SalleService } from 'src/app/services/salle.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  userForm!: FormGroup;
  reservation!: Reservation;
  listusers=false;
  userConnect!:User;
  userID!:string;
  ngOnInit(): void {
    this.userConnect=this.tokenServ.getUser();
    this.getSalles();
    this.getReservations();
    this.getEmployees();
    this.infoForm();   
  }
  constructor(private fb: FormBuilder,public salleServ:SalleService,
    public notificationServ:NotificationService,
    public emplserv: EmployeeService,public tokenServ:TokenService,
    public reservationServ:ReservationService, private router:Router
  ) { }
  
 
  private getReservations():void{
    this.reservationServ.getAll().subscribe( 
      response => { this.reservationServ.list = response["hydra:member"];
    }
    );
  }

  private getSalles():void{
    this.salleServ.getAll().subscribe( 
      response => { this.salleServ.list = response["hydra:member"];
    }
    );
  }
  private getEmployees():void{
    this.emplserv.getAll().subscribe( 
      response => { this.emplserv.list = response["hydra:member"];
    }
    );
  }
  
  addData() {
    this.reservationServ.createData(this.reservationServ.formData.value).
      subscribe(data => {
          console.log(data);
          this.reservationServ.getAll().subscribe(
            response =>{this.reservationServ.list = response["hydra:member"];}
           
           );
           alert("reservation creer avec succee");
           this.router.navigate(['/client/list-reservation']);
        }        
      );
  }
  
  

  infoForm() {
    this.reservationServ.formData = this.fb.group({
      id: null,
      jour: ['', [Validators.required,]],
      timeDeb: ['', [Validators.required, ]],
      timeFin: ['',[Validators.required]],
      salle: ['',[Validators.required, Validators.min(3), Validators.max(30)]],
      participiants: this.fb.array([], [Validators.required, Validators.minLength(2)]),
      respansable:"/api/users/"+this.userConnect.id,
      //participiants: new FormArray([]),
    //participiants:this.fb.array([], [Validators.required]),
    });
  }
  envoiyerNotification(){
   
    var date=new Date();
    var notification={
      id: null,
      message: this.notificationServ.messageReservation,
      date: date,
      usersConcernes: this.reservationServ.formData.value.participiants,
      };
      
      
      //console.log(this.notificationServ.formData.get());

    this.notificationServ.createData(notification).
      subscribe(data => {
          console.log(data);
         
        }        
      );
  }

  onCbChange(e:any) {

    const participiants: FormArray = this.reservationServ.formData.get('participiants') as FormArray;

    if (e.target.checked) {
      participiants.push(new FormControl('/api/users/'+e.target.value));
    } else {
       const index = participiants.controls.findIndex(x => x.value === e.target.value);
       participiants.removeAt(index);
    }
  }
 

  
  public comparerTime(res:Reservation,deb: Time, fin:Time):boolean{
    if((res.timeDeb>deb && res.timeDeb>fin) || (deb>res.timeFin && fin>res.timeFin)){
        return true;
    }
    return false;
}

  

  suivant(){
    this.listusers=!this.listusers;
  }

  
  onSubmit(){

    var salle: any;
    var list=this.salleServ.list;
    var reservation: any;
    var listRes=this.reservationServ.list;
    var form=this.reservationServ.formData.value;
    var testRes=true;
    var testsall=false;

    for(salle in list){
      if( list[salle].capacite==this.reservationServ.formData.value.salle){
        testsall=true;
        for(reservation in listRes){
          let strdate=listRes[reservation].jour.toString().substring(0,10);
          
          if(strdate==form.jour.toString().substring(0,10) && list[salle].id.toString()==listRes[reservation].salle.substring(12) && !((form.timeDeb.toString() <= listRes[reservation].timeDeb.toString().substring(11,16) && form.timeFin.toString() <= listRes[reservation].timeDeb.toString().substring(11,16)) || (form.timeDeb.toString() >= listRes[reservation].timeFin.toString().substring(11,16) && form.timeFin.toString() >= listRes[reservation].timeFin.toString().substring(11,16)) ) ){
            console.log("salle reserver dans cette temps");
            testRes=false;
            break;
          }
        }
      }
      if(testRes==true && testsall==true){
        this.reservationServ.formData.value.salle= String( "/api/salles/"+list[salle].id);
        this.addData();
        this.envoiyerNotification();
        break;
      }
    }
    if(testsall==false || testRes==false){
      var listCapacite=[];
      var capct:any;
      for(salle in list){
        listCapacite.push(list[salle].capacite);
      }
      listCapacite.sort(function(a, b){return a - b});
      //console.log(listCapacite);
      //console.log(this.reservationServ.formData.value.salle);
      for(capct in listCapacite){
        if(listCapacite[capct]>form.salle){
          this.reservationServ.formData.value.salle=listCapacite[capct];
          //console.log(this.reservationServ.formData.value.salle);
          this.onSubmit();
          break;
        }
        
      }
  
    }
 
  }
  


}
