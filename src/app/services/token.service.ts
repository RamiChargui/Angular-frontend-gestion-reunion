import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor(private router: Router) { }

  saveToken(token: any,url:string): void{
    localStorage.setItem('token', token.token);
    this.router.navigate([url])
  }

  saveUser(user: any,): void{

    localStorage.setItem('user', JSON.stringify(user));
    console.log(localStorage.getItem('user'))
  }
  getUser():User{
    return  JSON.parse(localStorage.getItem('user') || '{}');
  }

  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token
  }

  getToken(): string | null{
    return localStorage.getItem('token');

  }

  clearToken(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
  }
}