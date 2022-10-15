import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  userConnect!: string;

  constructor(private tokenServ:TokenService) { }
  ngOnInit(): void {
  }
  getUserConnect(event:User){
    console.log(event.email);

  }
  Logout(){
    this.tokenServ.clearToken();
  }

}
