import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiseService {
 

  constructor(private http:  HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/login`, data);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  } 
}
