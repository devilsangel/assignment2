import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
	authUrl:string="api/auth.php?email="
  	constructor(private apiService:ApiService, private httpClient:HttpClient) { }

  	login(email):Observable<User>{
  		return this.httpClient.get<User>(this.apiService.ip+this.authUrl+email);
  	}
    setLoggedInState(user){
      localStorage.setItem("user",JSON.stringify(user));
    }
    getLoggedInState():boolean{
      // console.log(localStorage.getItem("user"));
      return localStorage.getItem("user")!=null;
    }
    getLoggedInUser():User{
      return JSON.parse(localStorage.getItem("user"))
    }
  	logout(){
      localStorage.clear();
    }
}
