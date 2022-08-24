import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Department } from 'src/app/models/department';
import { User } from 'src/app/models/user';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  public users!: User[]; 
  public department!: Department;
  constructor(
    public deptserv:DepartmentService,public empservice:EmployeeService, public fb: FormBuilder, 
    private router: Router,
  ) { }

  private getDepartments():void{
    this.deptserv.getAll().subscribe( 
      response => { this.deptserv.list = response["hydra:member"];
    }
    );
    
  }
  getDeptNom(nom: string):string{
    var ss:any;
    for(ss in this.deptserv.list){
      console.log(this.deptserv.list[ss].id.toString()+" "+nom);
      if(this.deptserv.list[ss].id.toString()==nom.substring(17)){
        return this.deptserv.list[ss].libelle;

      }
    }
    return "...";

  }
  

  private getEmployees():void{
    this.empservice.getAll().subscribe( 
      response => { this.empservice.list = response["hydra:member"];
    }
    );
    
  }
  selectData(item : User) {
    this.empservice.choixmenu = "M";

    this.empservice.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/addemployee']); 
  }

 

  removeData(id:number) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
      this.empservice.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.getEmployees();
          },
          error => console.log(error));
    }
  }
  

  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();

  }

}
