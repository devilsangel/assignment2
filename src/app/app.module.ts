import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';
import { LoginModule } from './login/login.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { UserProfileModule } from './user-profile/user-profile.module'
import { routing } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    DashboardModule,
    UserProfileModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
