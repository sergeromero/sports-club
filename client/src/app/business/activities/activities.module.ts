import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    ActivityListComponent,
    ActivityDetailsComponent,
    ActivityThumbnailComponent
} from './index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
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
