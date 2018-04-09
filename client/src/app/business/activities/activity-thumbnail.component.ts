import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'activity-thumbnail',
    templateUrl: './activity-thumbnail.component.html',
    styleUrls: ['./activity-thumbnail.component.css']
})

export class ActivityThumbnailComponent implements OnInit {
    @Input() public activity: any;

    constructor() { }

    ngOnInit() { }
}
