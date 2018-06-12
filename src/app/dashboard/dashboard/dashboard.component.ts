import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Department } from '../../models/Department';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
	departments:Department[];
	departmentShow:Department[];
	key:string;
  	constructor(private apiService:ApiService) { }

  	filter(){
  		this.departmentShow = this.departments.filter((department)=>{
  			return department.name.toLowerCase().indexOf(this.key.toLowerCase())!=-1;
  		});
  	}
  	sort(){
  		this.departmentShow = this.departments.sort((dep1, dep2)=>{
  			return dep1.name<dep2.name? -1 : 1;
  		});
  	}
  	getDepartments(){
    	this.apiService.getAllDepartments().subscribe((departments)=>{
    		this.departments = departments;
    		this.departmentShow = departments;
        console.log(this.departments);
    	});
  	}
 	ngOnInit() {
 		this.getDepartments();
  	}
}
