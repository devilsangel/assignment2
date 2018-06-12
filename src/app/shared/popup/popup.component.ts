import { Component, OnInit, Input } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor() { }

  ngOnInit() {	
  	// $('#modal').show();
  }
  toggleModal(){
  	$('modal').toggle();
  }
}
