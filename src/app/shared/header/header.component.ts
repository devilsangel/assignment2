import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Course } from '../../models/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	show:boolean=false;
	key:string;
	courses:Course[];
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit() {
  }

  search(){
  	console.log(this.key);
  	this.apiService.searchCourses(this.key).subscribe((courses)=>{
  		this.courses = courses
  		this.toggleModal();
  	});
  }
  toggleModal(){
  	this.show = !this.show;
  }
}
