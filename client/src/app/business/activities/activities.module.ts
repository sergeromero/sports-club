import { NgModule } from '@angular/core';

import {
    ActivityListComponent,
    ActivityDetailsComponent,
    ActivityThumbnailComponent
} from './index';

@NgModule({
    imports: [],
    exports: [
        ActivityDetailsComponent,
        ActivityListComponent,
        ActivityThumbnailComponent
    ],
    declarations: [
        ActivityDetailsComponent,
        ActivityListComponent,
        ActivityThumbnailComponent
    ],
    providers: [],
})
export class ActivitiesModule { }
