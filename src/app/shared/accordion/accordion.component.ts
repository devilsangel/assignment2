import { Input, Component, OnInit } from '@angular/core';
import { Department } from '../../models/Department';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
	@Input() departments:Department[];
  constructor() { }

  ngOnInit() {
  }

}
