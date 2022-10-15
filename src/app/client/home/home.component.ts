import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
