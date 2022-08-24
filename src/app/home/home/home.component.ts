import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departments!: Department;
  constructor(
    public crudserv:CrudService
  ) { }
  
  private getDepartment():void{
    this.crudserv.getDepartment().subscribe( 
      response => { this.crudserv.list = response["hydra:member"];
    }
    );
  }

  ngOnInit(): void {
    this.getDepartment();
      
    
  }

}
