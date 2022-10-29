import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://127.0.0.1:8000/api/users";
  userConnect!: User;
  choixmenu : string  = 'A';
  list : User[] = [];
  user!: User ;
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: string): Observable<User> {
    return this.http.get<User>(`http://127.0.0.1:8000${id}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.patch(`http://127.0.0.1:8000/department/${id}/edit`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/users?page=1");
  }
}
