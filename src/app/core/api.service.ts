import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Department } from '../models/Department';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../models/Course';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	ip:string="http://192.168.64.2/";

  	constructor(private httpClient:HttpClient) { }

  	getAllUsers():Observable<User[]>{
  		return this.httpClient.get<User[]>(this.ip+"api/api.php/users");
  	}

  	getAllDepartments():Observable<Department[]>{
  		return this.httpClient.get<Department[]>(this.ip+"api/api.php/departments");
  	}

  	getDepartment(id:string):Observable<Department>{
  		return this.httpClient.get<Department>(this.ip+"api/api.php/departments/"+id);
  	}

  	updateDepartment(department:Department):Observable<any>{
  		return this.httpClient.put('http://192.168.64.2/api/api.php/departments/1', JSON.stringify(department), httpOptions);
  	}

  	getCourses(department:Department):Observable<Course[]>{
  		return this.httpClient.get<Course[]>(this.ip+"api/courses.php/?dep="+department.id);

  	}
}
