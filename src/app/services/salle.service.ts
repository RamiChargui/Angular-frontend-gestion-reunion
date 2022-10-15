import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private baseUrl = "http://127.0.0.1:8000/api/salles";
  
  choixmenu : string  = 'A';
  list : Salle[] = [];
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(url: string) {
    return this.http.get<Salle>(`http://127.0.0.1:8000${url}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(`${this.baseUrl}`, salle);
  }
  
  updatedata( value: Salle): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${value.id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/salles?page=1");
  }
}
