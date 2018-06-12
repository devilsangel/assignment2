import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(PopupComponent) popup:PopupComponent;
	department:Department;
	editState:boolean=false;
	newDep:Department;
	courses:Course[];
  newCourse:Course;
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
      this.popup.toggleModal();
    }
    addNewCourse(){
      this.newCourse.department = this.department.id;
      this.apiService.addCourse(this.newCourse).subscribe((num)=>{
        this.courses.push(this.newCourse);
        this.popup.toggleModal();
      });
    }
  	ngOnInit() {
  		this.route.params.subscribe(params => {
	        const id = <string>params['id'];
          this.newCourse = new Course();
          this.newCourse.stars = 0;
	        if(id != null){
	            this.getDepartment(id);
	        }else{
	        	this.router.navigate(['dashboard']);
	        }
    	});
  	}

}
