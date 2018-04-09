import { Routes } from '@angular/router';
import { HomeComponent } from './business/home/home.component';
import {
    MembershipSubscriptionComponent,
    MembershipInfoComponent
} from './business/membership/index';
import {
    ActivityListComponent,
    ActivityDetailsComponent
} from './business/activities/index';
import { Error404Component } from './common/errors/404.component';
import { ActivityRouteGuardService } from './core/route-guards/activity-router-guards.service';

export const appRoutes: Routes = [
    // prefix (redirect if the url starts with the path) full (redirect if the whole rul matches )
    { path: 'membership/subscribe', component: MembershipSubscriptionComponent },
    { path: 'membership/info', component: MembershipInfoComponent },
    { path: 'activities', component: ActivityListComponent },
    { path: 'activities/:id', component: ActivityDetailsComponent, canActivate: [ActivityRouteGuardService]},
    { path: '404', component: Error404Component },
    { path: '', component: HomeComponent, pathMatch: 'full' },
];
