import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { User } from 'src/app/models/user';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  department!: Department;
  ngOnInit(): void {
    console.log(this.deptServ.list);
    this.getDepartments();
    this.infoForm();
  
      
     
  }
  constructor(private fb: FormBuilder,public emplserv: EmployeeService,public deptServ:DepartmentService, private router:Router) { }
  
  getDepartment(id: number):Department{
    this.deptServ.getData(id).subscribe(
      response => { this.department = response;
      }
    );
    return this.department;
  }
  private getDepartments():void{
    this.deptServ.getAll().subscribe( 
      response => { this.deptServ.list = response["hydra:member"];
    }
    );
  }
  
  addData() {
    this.emplserv.formData.value.department= String( "/api/departments/"+this.emplserv.formData.value.department);
    this.emplserv.createData(this.emplserv.formData.value).
      subscribe(data => {                 
        this.router.navigate(['/login']);
      });
  }

  infoForm() {
    this.emplserv.formData = this.fb.group({
      id: null,
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      department: ['',[Validators.required]],
      email: ['', [Validators.required]],
      plainPassword: ['', [Validators.required]],
    });
  }

  resetForm() {
    this.emplserv.formData.reset();
  }

  onSubmit(){
    
      this.addData();

  }

  
}
