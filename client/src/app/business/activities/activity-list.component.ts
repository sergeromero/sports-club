import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../core/activities/activity.service';

@Component({
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.css']
})

export class ActivityListComponent implements OnInit {
    public activities: any[];

    constructor(private activityService: ActivityService) { }

    ngOnInit() {
        this.activities = this.activityService.getActivities();
     }
}
