import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { AccordionComponent } from './accordion/accordion.component';
import { RatingComponent } from './rating/rating.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  declarations: [HeaderComponent, PopupComponent, AccordionComponent, RatingComponent],
  exports:[HeaderComponent, PopupComponent, AccordionComponent, RatingComponent]
})
export class SharedModule { }
