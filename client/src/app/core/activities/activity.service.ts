import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

    constructor() { }

    public getActivities(): any[] {
        return activities;
    }

    public getActivity(id: number): any {
        return activities.find(activity => activity.Id === id);
    }
}

const activities = [
    { Id: 75489, name: 'Tennis'},
    { Id: 1246, name: 'Golf'},
    { Id: 954, name: 'Chess'},
    { Id: 3458, name: 'Swimming'},
    { Id: 4896,  name: 'Squash'},
];
