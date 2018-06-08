import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ApiService } from '../core/api.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
	user:User;
  constructor(private apiService:ApiService, private authService:AuthService) { this.user = new User();}

  setPersonal(user:User){
  	this.user.setPersonal(user);
  }
  setEducation(user:User){
  	this.user.setEducation(user);
  }
  setAddress(user:User){
  	this.user.setAddress(user);
  }
  getUser():User{
  	return this.user;
  }
  updateUser(){
  	this.user.id = this.authService.getLoggedInUser().id;
  	this.apiService.updateUser(this.user).subscribe((num)=>{{this.authService.login(this.user)}});
  }
}
