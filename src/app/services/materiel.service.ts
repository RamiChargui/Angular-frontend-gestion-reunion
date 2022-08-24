import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private baseUrl = "http://127.0.0.1:8000/api/materiels";
  
  choixmenu : string  = 'A';
  list : Materiel[] = [];
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<Materiel> {
    return this.http.get<Materiel>(`${this.baseUrl}/${id}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(materiel: Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(`${this.baseUrl}`, materiel);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/materiels?page=1");
  }
}
