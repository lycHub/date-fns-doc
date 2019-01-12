import { NgModule } from '@angular/core';

import { YearRoutingModule } from './year-routing.module';
import { AddYearsComponent } from './add-years/add-years.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInCalendarYearsComponent } from './difference-in-calendar-years/difference-in-calendar-years.component';
import { DifferenceInYearsComponent } from './difference-in-years/difference-in-years.component';
import { EndOfYearComponent } from './end-of-year/end-of-year.component';
import { GetDaysInYearComponent } from './get-days-in-year/get-days-in-year.component';
import { GetYearComponent } from './get-year/get-year.component';
import { IsLeapYearComponent } from './is-leap-year/is-leap-year.component';
import { IsSameYearComponent } from './is-same-year/is-same-year.component';
import { IsThisYearComponent } from './is-this-year/is-this-year.component';
import { LastDayOfYearComponent } from './last-day-of-year/last-day-of-year.component';
import { SetYearComponent } from './set-year/set-year.component';
import { StartOfYearComponent } from './start-of-year/start-of-year.component';
import { SubYearsComponent } from './sub-years/sub-years.component';

@NgModule({
  declarations: [
    AddYearsComponent,
    DifferenceInCalendarYearsComponent,
    DifferenceInYearsComponent,
    EndOfYearComponent,
    GetDaysInYearComponent,
    GetYearComponent,
    IsLeapYearComponent,
    IsSameYearComponent,
    IsThisYearComponent,
    LastDayOfYearComponent,
    SetYearComponent,
    StartOfYearComponent,
    SubYearsComponent
  ],
  exports: [
    AddYearsComponent,
    DifferenceInCalendarYearsComponent,
    DifferenceInYearsComponent,
    EndOfYearComponent,
    GetDaysInYearComponent,
    GetYearComponent,
    IsLeapYearComponent,
    IsSameYearComponent,
    IsThisYearComponent,
    LastDayOfYearComponent,
    SetYearComponent,
    StartOfYearComponent,
    SubYearsComponent
  ],
  imports: [
    ShareModule,
    YearRoutingModule
  ]
})
export class YearModule { }
