import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-listmat',
  templateUrl: './listmat.component.html',
  styleUrls: ['./listmat.component.css']
})
export class ListmatComponent implements OnInit {

  public materiels!: Materiel[]; 
  constructor(
    public crudserv:MaterielService,public fb: FormBuilder, 
    private router: Router,
  ) { }

  private getMateriels():void{
    this.crudserv.getAll().subscribe( 
      response => { this.crudserv.list = response["hydra:member"];
    }
    );
  }
  selectData(item : Materiel) {
    this.crudserv.choixmenu = "M";

    this.crudserv.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/addmateriel']); 
  }

  getData() {
   
    this.crudserv.getAll().subscribe(
      response => { 
        
     this.crudserv.list = response["hydra:member"];
    
    }
    );
  }

  removeData(id:number) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
      this.crudserv.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.getData();
          },
          error => console.log(error));
    }
  }
  

  ngOnInit(): void {
    this.getMateriels();
  }

}
