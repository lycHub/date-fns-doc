import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddYearsComponent} from "./add-years/add-years.component";
import {DifferenceInCalendarYearsComponent} from "./difference-in-calendar-years/difference-in-calendar-years.component";
import {DifferenceInYearsComponent} from "./difference-in-years/difference-in-years.component";
import {EndOfYearComponent} from "./end-of-year/end-of-year.component";
import {GetDaysInYearComponent} from "./get-days-in-year/get-days-in-year.component";
import {GetYearComponent} from "./get-year/get-year.component";
import {IsLeapYearComponent} from "./is-leap-year/is-leap-year.component";
import {IsSameYearComponent} from "./is-same-year/is-same-year.component";
import {IsThisYearComponent} from "./is-this-year/is-this-year.component";
import {LastDayOfYearComponent} from "./last-day-of-year/last-day-of-year.component";
import {SetYearComponent} from "./set-year/set-year.component";
import {StartOfYearComponent} from "./start-of-year/start-of-year.component";
import {SubYearsComponent} from "./sub-years/sub-years.component";

const routes: Routes = [
  {path: 'addYears', component: AddYearsComponent, data: { info: 'year/addYears'}},
  {path: 'differenceInCalendarYears', component: DifferenceInCalendarYearsComponent, data: { info: 'year/differenceInCalendarYears'}},
  {path: 'differenceInYears', component: DifferenceInYearsComponent, data: { info: 'year/differenceInYears'}},
  {path: 'endOfYear', component: EndOfYearComponent, data: { info: 'year/endOfYear'}},
  {path: 'getDaysInYear', component: GetDaysInYearComponent, data: { info: 'year/getDaysInYear'}},
  {path: 'getYear', component: GetYearComponent, data: { info: 'year/getYear'}},
  {path: 'isLeapYear', component: IsLeapYearComponent, data: { info: 'year/isLeapYear'}},
  {path: 'isSameYear', component: IsSameYearComponent, data: { info: 'year/isSameYear'}},
  {path: 'isThisYear', component: IsThisYearComponent, data: { info: 'year/isThisYear'}},
  {path: 'lastDayOfYear', component: LastDayOfYearComponent, data: { info: 'year/lastDayOfYear'}},
  {path: 'setYear', component: SetYearComponent, data: { info: 'year/setYear'}},
  {path: 'startOfYear', component: StartOfYearComponent, data: { info: 'year/startOfYear'}},
  {path: 'subYears', component: SubYearsComponent, data: { info: 'year/subYears'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearRoutingModule { }
