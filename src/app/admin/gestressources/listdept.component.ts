import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css']
})
export class ListdeptComponent implements OnInit {
  public departments!: Department[]; 
  constructor(
    public crudserv:DepartmentService,public fb: FormBuilder, 
    private router: Router,
  ) { }

  private getDepartment():void{
    this.crudserv.getAll().subscribe( 
      response => { this.crudserv.list = response["hydra:member"];
    }
    );
  }
  selectData(item : Department) {
    this.crudserv.choixmenu = "M";

    this.crudserv.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/adddepartment']); 
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
    this.getDepartment();
  }

}
