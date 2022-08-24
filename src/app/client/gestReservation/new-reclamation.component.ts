import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-new-reclamation',
  templateUrl: './new-reclamation.component.html',
  styleUrls: ['./new-reclamation.component.css']
})
export class NewReclamationComponent implements OnInit {

  department!: Reclamation;
  depForm!: FormGroup;
  ngOnInit(): void {
    this.getSalles();
    this.infoForm(); 
  }

  constructor(private fb: FormBuilder,public salleServ: SalleService,public reclamationServ: ReclamationService, private router:Router) { }
  
  addData() {
    this.reclamationServ.createData(this.reclamationServ.formData.value).
      subscribe(data => {   
        this.router.navigate(['/client']);
        
      });
  }

  infoForm() {
    this.reclamationServ.formData = this.fb.group({
      id: null,
      salle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      etat:false,
      dateRec: new Date(),
    });
  }
  private getSalles():void{
    this.salleServ.getAll().subscribe( 
      response => { this.salleServ.list = response["hydra:member"];
    }
    );
  }

  getSalle(nom:string):any{
    var ss:any;
    for(ss in this.salleServ.list){
      
      if(this.salleServ.list[ss].libelle==nom){
        return this.salleServ.list[ss].id;
      }
    }
    return 0;

  }

  onSubmit(){
    var nom=this.reclamationServ.formData.value.salle;
    this.reclamationServ.formData.value.salle="/api/salles/"+this.getSalle(nom);

    console.log(this.reclamationServ.formData.value );
    this.addData();
    alert("Reclamation passer avec succe");
   
  }

}
