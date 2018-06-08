import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
	user:User;
	myform = new FormGroup({
        apt: new FormControl(),
        street: new FormControl(),
        city: new FormControl(),	
        country: new FormControl(),	
    });
  constructor(private apiService:ApiService, private authService:AuthService, private router:Router, private userProfileService:UserProfileService) { }
  getUser(){
  	this.user = this.authService.getLoggedInUser()
  }
  next(){
  	this.user = this.myform.value;
  	this.userProfileService.setAddress(this.user);
  	this.userProfileService.updateUser();
  	// console.log(this.userProfileService.user);
  	this.router.navigate(["/dashboard"]);
  }
  ngOnInit() {
  	this.getUser();
  }

}
