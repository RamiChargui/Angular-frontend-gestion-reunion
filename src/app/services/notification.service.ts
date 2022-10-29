import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = "http://127.0.0.1:8000/api/notifications";
  
  messageReservation : string  = 'Vous avez inviter a nouvelle reunion';
  messageReclamation: string = 'il y a un nouvelle reclamation';
  list : Notification[] = [];
  public notification!:Notification;
  
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(url: string):Observable<Notification> {
    return this.http.get<Notification>(`http://127.0.0.1:8000${url}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.baseUrl}`, notification);
  }
  
  updatedata(id: number, value:   Notification): Observable<Notification> {
    return this.http.patch<Notification>(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {      
    return this.http.get("http://127.0.0.1:8000/api/notifications?page=1");
  }
}
