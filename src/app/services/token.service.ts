import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor(private router: Router) { }

  saveToken(token: string,url:string): void{
    localStorage.setItem('token', token);
    this.router.navigate([url])
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
      this.router.navigate(['/login']);
  }
}