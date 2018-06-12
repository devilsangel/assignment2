import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Department } from '../../models/Department';
import { Course } from '../../models/Course';
import { ApiService } from '../../core/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PopupComponent } from '../../shared/popup/popup.component';
@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {
  @ViewChildren("hello") popup:QueryList<PopupComponent>;
	department:Department;
	editState:boolean=false;
	newDep:Department;
	courses:Course[];
  	constructor(private apiService:ApiService, private route:ActivatedRoute, private router:Router) { }

  	getDepartment(id:string){
  		this.apiService.getDepartment(id).subscribe((department)=>{
  			if(department){
  				this.department = department;
  				this.newDep = new Department();
  				this.getCourses();
  			}else{
  				this.router.navigate(['dashboard']);
  			}
  		});
  	}
  	updateDepartment(){
  		this.apiService.updateDepartment(this.newDep).subscribe(num=>{
  			if(num!=0){
  				console.log("here");
  				this.department = this.newDep;
  			}
  			this.editState=false;
  		});
  	}

  	getCourses(){
  		this.apiService.getCourses(this.department).subscribe(courses=>{this.courses=courses});
  	}
  	cancel(){
  		console.log(this.department);
  		this.editState = false;
  		this.newDep = new Department();
  		console.log(this.department);
  	}
    addCourses(){
      this.popup.last.toggleModal();
    }
  	ngOnInit() {
  		this.route.params.subscribe(params => {
	        const id = <string>params['id'];
	        if(id != null){
	            this.getDepartment(id);
	        }else{
	        	this.router.navigate(['dashboard']);
	        }
    	});
  	}

}
