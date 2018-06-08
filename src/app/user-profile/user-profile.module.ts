import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { AddressComponent } from './address/address.component';
import { SharedModule} from '../shared/shared.module';
import { routing } from './user-profile.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalComponent, EducationComponent, AddressComponent],
  exports: [PersonalComponent, EducationComponent, AddressComponent]
})
export class UserProfileModule { }
