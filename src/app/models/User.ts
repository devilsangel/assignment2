 export class User{
 	id:number;
 	fname:string;
 	lname:string;
 	email:string;
 	password:string;
 	gender:string;
 	university:string;
 	college:string;
 	major:string;
 	apt:string;
 	street:string;
 	city:string;
 	country:string;

 	setPersonal(user:User){
 		this.fname = user.fname;
 		this.lname = user.lname;
 		this.email = user.email;
 		this.password = user.password;
 		this.gender = user.gender;
 	}

	setEducation(user:User){
		this.university = user.university;
		this.college = user.college;
		this.major = user.major;
	}

 	setAddress(user:User){
 		this.apt = user.apt;
 		this.street = user.apt;
 		this.city = user.city;
 		this.country = user.country;
 	}
 }