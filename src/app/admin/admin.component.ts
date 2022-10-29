import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private tokenServ:TokenService) { }
  userConnect !:User;
  emailUser!:string;

  ngOnInit(): void {
    
    this.userConnect=this.tokenServ.getUser();
    console.log(this.userConnect)
  }

  Logout(){
    this.tokenServ.clearToken();
  }

}
