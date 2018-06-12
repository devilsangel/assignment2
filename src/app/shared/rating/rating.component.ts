import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
	countVal=0;
	@Output() counterChange = new EventEmitter();
	@Input() isInput:boolean;
	@Input()
	  get count() {
	    return this.countVal;
	  }
	  
	  set count(val) {
	    this.countVal = val;
	    this.counterChange.emit(this.countVal);
	  }
  constructor() { }

  ngOnInit() {
  	console.log(this.count);
  }
  setCount(num){
  	if(this.isInput){
  		this.count = num;
  	}
  }
}
