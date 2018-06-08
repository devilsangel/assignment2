import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ApiService } from '../core/api.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
	user:User;
  constructor() { this.user = new User();}

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
}
