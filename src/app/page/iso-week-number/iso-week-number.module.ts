import { NgModule } from '@angular/core';
import { IsoWeekNumberRoutingModule } from './iso-week-number-routing.module';
import { AddISOYearsComponent } from './add-isoyears/add-isoyears.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInCalendarISOYearsComponent } from './difference-in-calendar-isoyears/difference-in-calendar-isoyears.component';
import { DifferenceInISOYearsComponent } from './difference-in-isoyears/difference-in-isoyears.component';
import { EndOfISOYearComponent } from './end-of-isoyear/end-of-isoyear.component';
import { GetISOWeeksInYearComponent } from './get-isoweeks-in-year/get-isoweeks-in-year.component';
import { GetISOYearComponent } from './get-isoyear/get-isoyear.component';
import { IsSameISOYearComponent } from './is-same-isoyear/is-same-isoyear.component';
import { IsThisISOYearComponent } from './is-this-isoyear/is-this-isoyear.component';
import { LastDayOfISOYearComponent } from './last-day-of-isoyear/last-day-of-isoyear.component';
import { SetISOYearComponent } from './set-isoyear/set-isoyear.component';
import { SubISOYearsComponent } from './sub-isoyears/sub-isoyears.component';
import { StartOfISOYearComponent } from './start-of-isoyear/start-of-isoyear.component';

@NgModule({
  declarations: [
    AddISOYearsComponent,
    DifferenceInCalendarISOYearsComponent,
    DifferenceInISOYearsComponent,
    EndOfISOYearComponent,
    GetISOWeeksInYearComponent,
    GetISOYearComponent,
    IsSameISOYearComponent,
    IsThisISOYearComponent,
    LastDayOfISOYearComponent,
    SetISOYearComponent,
    SubISOYearsComponent,
    StartOfISOYearComponent
  ],
  exports: [
    AddISOYearsComponent,
    DifferenceInCalendarISOYearsComponent,
    DifferenceInISOYearsComponent,
    EndOfISOYearComponent,
    GetISOWeeksInYearComponent,
    GetISOYearComponent,
    IsSameISOYearComponent,
    IsThisISOYearComponent,
    LastDayOfISOYearComponent,
    SetISOYearComponent,
    SubISOYearsComponent,
    StartOfISOYearComponent
  ],
  imports: [
    ShareModule,
    IsoWeekNumberRoutingModule
  ]
})
export class IsoWeekNumberModule { }
