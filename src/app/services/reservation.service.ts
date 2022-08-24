import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = "http://127.0.0.1:8000/api/reservations";
  
  choixmenu : string  = 'A';
  list : Reservation[] = [];
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}`, reservation);
  }
  
  updatedata(value:   Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/${value.id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/reservations?page=1");
  }
}
