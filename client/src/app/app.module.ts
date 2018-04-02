import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {
  LoginComponent,
  UserProfileComponent
} from './business/user/index';

import {
  ActivityListComponent
} from './business/activities/index';


@NgModule({
  declarations: [
    ActivityListComponent,
    AppComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
