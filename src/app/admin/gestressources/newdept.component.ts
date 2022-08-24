import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdept',
  templateUrl: './newdept.component.html',
  styleUrls: ['./newdept.component.css']
})
export class NewdeptComponent implements OnInit {
  department!: Department;
  depForm!: FormGroup;
  ngOnInit(): void {
    if(this.deptserv.choixmenu=="A"){
      this.infoForm();
    }
      
     
  }
  constructor(private fb: FormBuilder,public deptserv: DepartmentService, private router:Router) { }
  
 
  
  addData() {
    this.deptserv.createData(this.deptserv.formData.value).
      subscribe(data => {
        this.deptserv.getAll().subscribe(
          response =>{this.deptserv.list = response["hydra:member"];}
         );                 

        this.router.navigate(['/admin/listdepartment']);
      });
  }

  infoForm() {
    this.deptserv.formData = this.fb.group({
      id: null,
      libelle: ['', [Validators.required]],
    });
  }

  resetForm() {
    this.deptserv.formData.reset();
  }

  onSubmit(){
    if(this.deptserv.choixmenu=="A"){
      this.addData();
    }
    else{
      this.updateData();
    }

  }

  updateData() {
    console.log(this.deptserv.formData.value);
    this.department.libelle= this.deptserv.formData.value.libelle;
    this.department.id= this.deptserv.formData.value.id;
    this.deptserv.updatedata(this.department).
      subscribe(
        
        response => console.log(response)
      );

      this.router.navigate(['/admin/listdepartment']);
  }
 

}
