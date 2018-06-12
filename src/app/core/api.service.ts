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
  		return this.httpClient.put(this.ip+'api/api.php/departments/'+department.id, JSON.stringify(department), httpOptions);
  	}

  	getCourses(department:Department):Observable<Course[]>{
  		return this.httpClient.get<Course[]>(this.ip+"api/courses.php/?dep="+department.id);

  	}

    updateUser(user:User):Observable<any>{
      return this.httpClient.put(this.ip+'api/api.php/users/'+user.id, JSON.stringify(user), httpOptions);
    }

    searchCourses(key:string){
      return this.httpClient.get<Course[]>(this.ip+"api/courses.php/?key="+key);
    }
    addCourse(course:Course):Observable<any>{
      return this.httpClient.post(this.ip+"api/api.php/courses/",JSON.stringify(course),httpOptions);
    }
}
