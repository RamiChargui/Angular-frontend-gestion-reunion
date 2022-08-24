import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiseService } from './services/auth-servise.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router,public authServ: AuthServiseService){

  }

  canActivate():boolean{
    if(this.authServ.loggedIn()){
      return true
    } else{
      this.router.navigate(['/login']);
      return false
    }
   
  }
  
}
