import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-newsalle',
  templateUrl: './newsalle.component.html',
  styleUrls: ['./newsalle.component.css']
})
export class NewsalleComponent implements OnInit {
  salle!: Salle;
  depForm!: FormGroup;
  ngOnInit(): void {
    if(this.SalleService.choixmenu=="A"){
      this.infoForm();
    }
      
     
  }
  constructor(private fb: FormBuilder,public SalleService: SalleService, private router:Router) { }
  
 
  
  addData() {
    this.SalleService.createData(this.SalleService.formData.value).
      subscribe(data => {
        this.SalleService.getAll().subscribe(
          response =>{this.SalleService.list = response["hydra:member"];}
         );                 

        this.router.navigate(['/admin/listsalle']);
      });
  }

  infoForm() {
    this.SalleService.formData = this.fb.group({
      id: null,
      libelle: ['', [Validators.required]],
      capacite: ['', [Validators.required]],
      etat:false
    });
  }

  resetForm() {
    this.SalleService.formData.reset();
  }

  onSubmit(){
    if(this.SalleService.choixmenu=="A"){
      this.addData();
    }
    else{
      this.updateData();
    }

  }

  updateData() {
    console.log(this.SalleService.formData.value);
    this.salle.libelle= this.SalleService.formData.value.libelle;
    this.salle.id= this.SalleService.formData.value.id;
    this.SalleService.updatedata(this.salle).
      subscribe(
        
        response => console.log(response)
      );

      this.router.navigate(['/admin/listsalle']);
  }
 

}
