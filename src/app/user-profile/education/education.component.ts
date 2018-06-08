import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
	user:User;
	myform = new FormGroup({
        university: new FormControl(),
        college: new FormControl(),
        major: new FormControl(),	
    });
  constructor(private authService:AuthService, private router:Router, private userProfileService:UserProfileService) { }
  getUser(){
  	this.user = this.authService.getLoggedInUser()
  }
  next(){
  	this.user = this.myform.value;
  	console.log(this.userProfileService.user);
  	this.userProfileService.setEducation(this.user);
  	this.router.navigate(["/profile/address"]);
  }
  ngOnInit() {
  	this.getUser();
  }

}
