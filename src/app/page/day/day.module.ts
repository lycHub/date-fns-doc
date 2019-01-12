import { NgModule } from '@angular/core';
import {DayRoutingModule} from "./day-routing.module";
import {ShareModule} from "../../share/share.module";
import { AddDaysComponent } from './add-days/add-days.component';
import { DifferenceInCalendarDaysComponent } from './difference-in-calendar-days/difference-in-calendar-days.component';
import { DifferenceInDaysComponent } from './difference-in-days/difference-in-days.component';
import { EachDayComponent } from './each-day/each-day.component';
import { EndOfDayComponent } from './end-of-day/end-of-day.component';
import { EndOfTodayComponent } from './end-of-today/end-of-today.component';
import { EndOfTomorrowComponent } from './end-of-tomorrow/end-of-tomorrow.component';
import { EndOfYesterdayComponent } from './end-of-yesterday/end-of-yesterday.component';
import { GetDateComponent } from './get-date/get-date.component';
import { GetDayOfYearComponent } from './get-day-of-year/get-day-of-year.component';
import { IsSameDayComponent } from './is-same-day/is-same-day.component';
import { IsTodayComponent } from './is-today/is-today.component';
import { IsTomorrowComponent } from './is-tomorrow/is-tomorrow.component';
import { IsYesterdayComponent } from './is-yesterday/is-yesterday.component';
import { SetDateComponent } from './set-date/set-date.component';
import { SetDayOfYearComponent } from './set-day-of-year/set-day-of-year.component';
import { StartOfDayComponent } from './start-of-day/start-of-day.component';
import { StartOfTodayComponent } from './start-of-today/start-of-today.component';
import { StartOfTomorrowComponent } from './start-of-tomorrow/start-of-tomorrow.component';
import { StartOfYesterdayComponent } from './start-of-yesterday/start-of-yesterday.component';
import { SubDaysComponent } from './sub-days/sub-days.component';

@NgModule({
  declarations: [
    AddDaysComponent,
    DifferenceInCalendarDaysComponent,
    DifferenceInDaysComponent,
    EachDayComponent,
    EndOfDayComponent,
    EndOfTodayComponent,
    EndOfTomorrowComponent,
    EndOfYesterdayComponent,
    GetDateComponent,
    GetDayOfYearComponent,
    IsSameDayComponent,
    IsTodayComponent,
    IsTomorrowComponent,
    IsYesterdayComponent,
    SetDateComponent,
    SetDayOfYearComponent,
    StartOfDayComponent,
    StartOfTodayComponent,
    StartOfTomorrowComponent,
    StartOfYesterdayComponent,
    SubDaysComponent
  ],
  imports: [
    DayRoutingModule,
    ShareModule
  ],
  exports: [
    AddDaysComponent,
    DifferenceInCalendarDaysComponent,
    DifferenceInDaysComponent,
    EachDayComponent,
    EndOfDayComponent,
    EndOfTodayComponent,
    EndOfTomorrowComponent,
    EndOfYesterdayComponent,
    GetDateComponent,
    GetDayOfYearComponent,
    IsSameDayComponent,
    IsTodayComponent,
    IsTomorrowComponent,
    IsYesterdayComponent,
    SetDateComponent,
    SetDayOfYearComponent,
    StartOfDayComponent,
    StartOfTodayComponent,
    StartOfTomorrowComponent,
    StartOfYesterdayComponent,
    SubDaysComponent
  ]
})
export class DayModule { }
