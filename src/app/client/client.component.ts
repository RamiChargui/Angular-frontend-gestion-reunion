import { ReadPropExpr, ThisReceiver } from '@angular/compiler';
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
 
  public getUser(id:number):void{
    this.userServ.getData('/api/users/'+id).subscribe(
      response => {this.userServ.user=response;
        console.log(this.userServ.user);
        this.getNotifications(this.userServ.user)
     }     
    );
    
    
  }

  public getNotification(url:string):void{
    this.notificationServ.getData(url).subscribe(
      response => {this.notificationServ.list.push(response);}
    )
  
  }

  public getNotifications(user:User){
    for(var item in user.notifications){
      this.getNotification(this.userServ.user.notifications[item])
    } 
  }

  
  Logout(){
    this.tokenServ.clearToken();
  }

  ngOnInit():void{
    this.userConnect=this.tokenServ.getUser();
    this.getUser(this.userConnect.id);
    

    //this.getNotifications();
    //this.getNotification("aaa");
    //console.log(this.userServ.user);
    //this.getMonNotif();
  }

}
