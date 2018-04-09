import { Injectable } from '@angular/core';
import { ActivityService } from '../activities/activity.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ActivityRouteGuardService implements CanActivate {

    constructor(private activityService: ActivityService, private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot) {
        const activityExists = !!this.activityService.getActivity(+route.params['id']);

        if (!activityExists) { this.router.navigate(['/404']); }

        return activityExists;
    }
}
