import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './activity-details.component.html',
    styleUrls: ['./activity-details.component.css']
})

export class ActivityDetailsComponent implements OnInit {
    activityId: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.activityId = +this.route.snapshot.params['id'];
     }
}
