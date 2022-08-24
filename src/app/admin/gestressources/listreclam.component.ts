import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { Salle } from 'src/app/models/salle';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-listreclam',
  templateUrl: './listreclam.component.html',
  styleUrls: ['./listreclam.component.css']
})
export class ListreclamComponent implements OnInit {

  public reclamations!: Reclamation[]; 
  public salle: Salle=new Salle();
  public nomSalle ="";
  constructor(
    public crudserv:ReclamationService, public salleServ:SalleService,public fb: FormBuilder, 
    private router: Router,
  ) { }


  selectData(item : Reclamation) {
    this.crudserv.choixmenu = "M";

    this.crudserv.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/addreclamation']); 
  }

  private getReclamations():void{
    this.crudserv.getAll().subscribe( 
      response => { 
        this.crudserv.list = response["hydra:member"];
       /* for(let i=0; i<this.crudserv.list.length;i++){
          this.crudserv.list[i].salle= this.getSalle(this.crudserv.list[i].salle);
        }
        */
        

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
            this.getReclamations();
          },
          error => console.log(error));
    }
  }
  
  ngOnInit(): void {
    this.getReclamations();
    this.getSalle();
       
 
  }
}
