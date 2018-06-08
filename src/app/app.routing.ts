import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { 
  AuthGuardService as AuthGuard 
} from './auth-gaurd.service';
export  const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module' },
  { path: 'dashboard', canActivate:[AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'department/:id', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'profile', loadChildren: './user-profile/user-profile.module#UserProfileModule'}

];

export  const routing: ModuleWithProviders = RouterModule.forRoot(routes);