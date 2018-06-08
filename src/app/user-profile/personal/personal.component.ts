import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
	user:User;
	myform = new FormGroup({
        fname: new FormControl(),
        lname: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        gender: new FormControl()
    });
  constructor(private authService:AuthService, private router:Router, private userProfileService:UserProfileService) { }
  getUser(){
  	this.user = this.authService.getLoggedInUser()
  }
  next(){
  	this.user = this.myform.value;
  	this.userProfileService.setPersonal(this.user);
  	this.router.navigate(["/profile/education"]);
  }
  ngOnInit() {
  	this.getUser();
  }

}
