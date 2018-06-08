import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { routing } from './dashboard.routing';
import { FormsModule } from '@angular/forms';
import { 
  AuthGuardService as AuthGuard 
} from '../auth-gaurd.service';
@NgModule({
  imports: [
  	SharedModule,
    CommonModule,
    routing,
    FormsModule
  ],
  providers:[AuthGuard],
  declarations: [DashboardComponent, DashboardDetailComponent],
  exports:[DashboardComponent, DashboardDetailComponent]
})
export class DashboardModule { }
