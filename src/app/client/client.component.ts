import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private tokenServ:TokenService) { }

  ngOnInit(): void {
  }
  Logout(){
    this.tokenServ.clearToken();
  }

}
