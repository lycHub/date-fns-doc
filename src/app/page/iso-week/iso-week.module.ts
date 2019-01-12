import { NgModule } from '@angular/core';

import { IsoWeekRoutingModule } from './iso-week-routing.module';
import {DifferenceInCalendarISOWeeksComponent} from "./difference-in-calendar-isoweeks/difference-in-calendar-isoweeks.component";
import {ShareModule} from "../../share/share.module";
import { EndOfISOWeekComponent } from './end-of-isoweek/end-of-isoweek.component';
import { GetISOWeekComponent } from './get-isoweek/get-isoweek.component';
import { IsSameISOWeekComponent } from './is-same-isoweek/is-same-isoweek.component';
import { IsThisISOWeekComponent } from './is-this-isoweek/is-this-isoweek.component';
import { LastDayOfISOWeekComponent } from './last-day-of-isoweek/last-day-of-isoweek.component';
import { SetISOWeekComponent } from './set-isoweek/set-isoweek.component';
import { StartOfISOWeekComponent } from './start-of-isoweek/start-of-isoweek.component';

@NgModule({
  declarations: [
    DifferenceInCalendarISOWeeksComponent,
    EndOfISOWeekComponent,
    GetISOWeekComponent,
    IsSameISOWeekComponent,
    IsThisISOWeekComponent,
    LastDayOfISOWeekComponent,
    SetISOWeekComponent,
    StartOfISOWeekComponent
  ],
  exports: [
    DifferenceInCalendarISOWeeksComponent,
    EndOfISOWeekComponent,
    GetISOWeekComponent,
    IsSameISOWeekComponent,
    IsThisISOWeekComponent,
    LastDayOfISOWeekComponent,
    SetISOWeekComponent,
    StartOfISOWeekComponent
  ],
  imports: [
    ShareModule,
    IsoWeekRoutingModule
  ]
})
export class IsoWeekModule { }
