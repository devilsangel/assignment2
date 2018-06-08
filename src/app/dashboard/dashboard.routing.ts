import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component'
import { 
  AuthGuardService as AuthGuard 
} from '../auth-gaurd.service';
export  const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',canActivate:[AuthGuard], component: DashboardComponent},
  {path:'department/:id', component: DashboardDetailComponent}
];

export  const routing: ModuleWithProviders = RouterModule.forChild(routes);