import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl = "http://127.0.0.1:8000/api/reclamations";
  
  choixmenu : string  = 'A';
  list : Reclamation[] = [];
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(url: string):Observable<Reclamation> {
    return this.http.get<Reclamation>(`http://127.0.0.1:8000/${url}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.baseUrl}`, reclamation);
  }
  
  updatedata(id: number, value:   Reclamation): Observable<Reclamation> {
    return this.http.patch<Reclamation>(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/reclamations?page=1");
  }
}
