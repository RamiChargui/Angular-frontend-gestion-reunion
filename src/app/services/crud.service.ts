import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../modules/department';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  list !: Department[];
  private baseUrl = "http://localhost:8000/api/departments?page=1";
  constructor(
    private http:HttpClient
  ) { }

  getDepartment():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
