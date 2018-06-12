import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
	@Input() isInput:boolean;
	@Input() count:number;
  constructor() { }

  ngOnInit() {
  	console.log(this.count);
  }
  setCount(num){
  	if(this.isInput){
  		this.count = num+1;
  	}
  }
}
