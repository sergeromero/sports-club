import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';

import {
  LoginComponent,
  UserProfileComponent
} from './business/user/index';

import {
  MembershipInfoComponent,
  MembershipSubscriptionComponent
} from './business/membership/index';

import { HomeComponent } from './business/home/home.component';
import { ActivitiesModule } from './business/activities/activities.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MembershipInfoComponent,
    MembershipSubscriptionComponent,
    UserProfileComponent
  ],
  imports: [
    ActivitiesModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
