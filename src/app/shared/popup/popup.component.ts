import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
	@ViewChild('content') ref:ElementRef;
	modalRef:NgbModalRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {	
  	// $('#modal').show();
  }
  toggleModal(){
  	if(this.modalRef){
  		this.modalRef.close();
  		this.modalRef = null;
  	}else{
  		this.modalRef = this.modalService.open(this.ref, {});
  	}
  }
}
