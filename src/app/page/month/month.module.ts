import { NgModule } from '@angular/core';

import { MonthRoutingModule } from './month-routing.module';
import { AddMonthsComponent } from './add-months/add-months.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInCalendarMonthsComponent } from './difference-in-calendar-months/difference-in-calendar-months.component';
import { DifferenceInMonthsComponent } from './difference-in-months/difference-in-months.component';
import { EndOfMonthComponent } from './end-of-month/end-of-month.component';
import { GetDaysInMonthComponent } from './get-days-in-month/get-days-in-month.component';
import { GetMonthComponent } from './get-month/get-month.component';
import { IsFirstDayOfMonthComponent } from './is-first-day-of-month/is-first-day-of-month.component';
import { IsLastDayOfMonthComponent } from './is-last-day-of-month/is-last-day-of-month.component';
import { IsSameMonthComponent } from './is-same-month/is-same-month.component';
import { IsThisMonthComponent } from './is-this-month/is-this-month.component';
import { LastDayOfMonthComponent } from './last-day-of-month/last-day-of-month.component';
import { SetMonthComponent } from './set-month/set-month.component';
import { StartOfMonthComponent } from './start-of-month/start-of-month.component';
import { SubMonthsComponent } from './sub-months/sub-months.component';

@NgModule({
  declarations: [
    AddMonthsComponent,
    DifferenceInCalendarMonthsComponent,
    DifferenceInMonthsComponent,
    EndOfMonthComponent,
    GetDaysInMonthComponent,
    GetMonthComponent,
    IsFirstDayOfMonthComponent,
    IsLastDayOfMonthComponent,
    IsSameMonthComponent,
    IsThisMonthComponent,
    LastDayOfMonthComponent,
    SetMonthComponent,
    StartOfMonthComponent,
    SubMonthsComponent
  ],
  exports: [
    AddMonthsComponent,
    DifferenceInCalendarMonthsComponent,
    DifferenceInMonthsComponent,
    EndOfMonthComponent,
    GetDaysInMonthComponent,
    GetMonthComponent,
    IsFirstDayOfMonthComponent,
    IsLastDayOfMonthComponent,
    IsSameMonthComponent,
    IsThisMonthComponent,
    LastDayOfMonthComponent,
    SetMonthComponent,
    StartOfMonthComponent,
    SubMonthsComponent
  ],
  imports: [
    ShareModule,
    MonthRoutingModule
  ]
})
export class MonthModule { }
