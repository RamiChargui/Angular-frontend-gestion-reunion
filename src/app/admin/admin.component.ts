import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private tokenServ:TokenService) { }

  ngOnInit(): void {

  }

  Logout(){
    this.tokenServ.clearToken();
  }

}
