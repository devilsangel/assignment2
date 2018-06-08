import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent} from './education/education.component';

export  const routes: Routes = [
  { path: 'profile', redirectTo: 'profile/personal', pathMatch: 'full' },
  { path: 'profile', children:[
  	{path:'personal',component:PersonalComponent},
  	{path:'address',component:AddressComponent},
  	{path:'education',component:EducationComponent}
  ]}
];

export  const routing: ModuleWithProviders = RouterModule.forChild(routes);