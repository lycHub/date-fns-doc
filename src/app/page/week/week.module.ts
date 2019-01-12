import { NgModule } from '@angular/core';

import { WeekRoutingModule } from './week-routing.module';
import { AddWeeksComponent } from './add-weeks/add-weeks.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInCalendarWeeksComponent } from './difference-in-calendar-weeks/difference-in-calendar-weeks.component';
import { DifferenceInWeeksComponent } from './difference-in-weeks/difference-in-weeks.component';
import { EndOfWeekComponent } from './end-of-week/end-of-week.component';
import { IsSameWeekComponent } from './is-same-week/is-same-week.component';
import { IsThisWeekComponent } from './is-this-week/is-this-week.component';
import { LastDayOfWeekComponent } from './last-day-of-week/last-day-of-week.component';
import { StartOfWeekComponent } from './start-of-week/start-of-week.component';
import { SubWeeksComponent } from './sub-weeks/sub-weeks.component';

@NgModule({
  declarations: [
    AddWeeksComponent,
    DifferenceInCalendarWeeksComponent,
    DifferenceInWeeksComponent,
    EndOfWeekComponent,
    IsSameWeekComponent,
    IsThisWeekComponent,
    LastDayOfWeekComponent,
    StartOfWeekComponent,
    SubWeeksComponent
  ],
  imports: [
    ShareModule,
    WeekRoutingModule
  ],
  exports: [
    AddWeeksComponent,
    DifferenceInCalendarWeeksComponent,
    DifferenceInWeeksComponent,
    EndOfWeekComponent,
    IsSameWeekComponent,
    IsThisWeekComponent,
    LastDayOfWeekComponent,
    StartOfWeekComponent,
    SubWeeksComponent
  ]
})
export class WeekModule { }
