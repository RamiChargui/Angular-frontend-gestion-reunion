import { ReadPropExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';
import { NotificationService } from '../services/notification.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private tokenServ:TokenService,public userServ:EmployeeService,
    public notificationServ:NotificationService
  ){}

  userConnect!:User;
  emailUser!:User;
  listNot!:Notification[];
  notification!:Notification;
 
  public getUser():void{
    this.userServ.getData('/api/users/6').subscribe(
      response => {this.userServ.user=response;
      this.emailUser.email=response.email }     
    );
    
    
  }

  /*public getNotification(url:string):void{
    this.notificationServ.getData(url).subscribe(
      response => {this.notificationServ.list.push(response);}
    )
  }

  public getNotifications(){
    for(var item in this.userServ.user.notifications){
      this.getNotification(this.userServ.user.notifications[item])
    } 
  }*/

  
  Logout(){
    this.tokenServ.clearToken();
  }

  ngOnInit():void{
    this.getUser();
    this.userConnect=this.tokenServ.getUser();
    console.log(this.emailUser.email);

   // this.getNotifications();
    //this.getNotifications();
    //console.log(this.emailUser);
    //this.getMonNotif();
  }

}
