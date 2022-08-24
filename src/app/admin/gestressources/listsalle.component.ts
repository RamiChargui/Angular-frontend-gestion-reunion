import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.css']
})
export class ListsalleComponent implements OnInit {

  public departments!: Salle[]; 
  constructor(
    public crudserv:SalleService,public fb: FormBuilder, 
    private router: Router,
  ) { }

  private getSalles():void{
    this.crudserv.getAll().subscribe( 
      response => { this.crudserv.list = response["hydra:member"];
    }
    );
  }
  selectData(item : Salle) {
    this.crudserv.choixmenu = "M";

    this.crudserv.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/addsalle']); 
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
    this.getSalles();
  }

}
