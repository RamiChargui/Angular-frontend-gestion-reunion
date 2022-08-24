import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './../models/department';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = "http://127.0.0.1:8000/api/departments";
  
  choixmenu : string  = 'A';
  list : Department[] = [];
  
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.baseUrl}/${id}`);
  }
 
getNumero()
{
   return this.http.get(`${this.baseUrl}`);
}

  createData(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.baseUrl}`, department);
  }
  
  updatedata(value:   Department): Observable<Department> {
    return this.http.put<Department>(`${this.baseUrl}/${value.id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
      
    return this.http.get("http://127.0.0.1:8000/api/departments?page=1");
  }
}
