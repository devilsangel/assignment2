import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email:string;
	password:string;
	error:boolean=false;
  	constructor(private http: HttpClient, private authService:AuthService, private router:Router) { }
 	ngOnInit() {
  	}
  	login(){
	  	this.authService.login(this.email).subscribe((user)=>{
	  		if(user){
	  			console.log(user);
	  			if(user.password==this.password){
	  				console.log(this.authService.getLoggedInState());
		  			this.authService.setLoggedInState(user);
		  			// this.authService.logout();
		  			this.router.navigate(['dashboard'])
	  			}else{
	  				this.error=true;
	  			}
	  		}else{
	  			this.error=true;
	  		}
	  	})
  }
}
