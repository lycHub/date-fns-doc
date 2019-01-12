import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDaysComponent} from "./add-days/add-days.component";
import {DifferenceInCalendarDaysComponent} from "./difference-in-calendar-days/difference-in-calendar-days.component";
import {DifferenceInDaysComponent} from "./difference-in-days/difference-in-days.component";
import {EachDayComponent} from "./each-day/each-day.component";
import {EndOfDayComponent} from "./end-of-day/end-of-day.component";
import {EndOfTodayComponent} from "./end-of-today/end-of-today.component";
import {EndOfTomorrowComponent} from "./end-of-tomorrow/end-of-tomorrow.component";
import {EndOfYesterdayComponent} from "./end-of-yesterday/end-of-yesterday.component";
import {GetDateComponent} from "./get-date/get-date.component";
import {GetDayOfYearComponent} from "./get-day-of-year/get-day-of-year.component";
import {IsSameDayComponent} from "./is-same-day/is-same-day.component";
import {IsTodayComponent} from "./is-today/is-today.component";
import {IsTomorrowComponent} from "./is-tomorrow/is-tomorrow.component";
import {IsYesterdayComponent} from "./is-yesterday/is-yesterday.component";
import {SetDateComponent} from "./set-date/set-date.component";
import {SetDayOfYearComponent} from "./set-day-of-year/set-day-of-year.component";
import {StartOfDayComponent} from "./start-of-day/start-of-day.component";
import {StartOfTodayComponent} from "./start-of-today/start-of-today.component";
import {StartOfTomorrowComponent} from "./start-of-tomorrow/start-of-tomorrow.component";
import {StartOfYesterdayComponent} from "./start-of-yesterday/start-of-yesterday.component";
import {SubDaysComponent} from "./sub-days/sub-days.component";

const routes: Routes = [
  {path: 'addDays', component: AddDaysComponent, data: {info: 'day/addDays'}},
  {path: 'differenceInCalendarDays', component: DifferenceInCalendarDaysComponent, data: {info: 'day/differenceInCalendarDays'}},
  {path: 'differenceInCalendarDays', component: DifferenceInCalendarDaysComponent, data: {info: 'day/differenceInCalendarDays'}},
  {path: 'differenceInDays', component: DifferenceInDaysComponent, data: {info: 'day/differenceInDays'}},
  {path: 'differenceInDays', component: DifferenceInDaysComponent, data: {info: 'day/differenceInDays'}},
  {path: 'eachDay', component: EachDayComponent, data: {info: 'day/eachDay'}},
  {path: 'endOfDay', component: EndOfDayComponent, data: {info: 'day/endOfDay'}},
  {path: 'endOfToday', component: EndOfTodayComponent, data: {info: 'day/endOfToday'}},
  {path: 'endOfTomorrow', component: EndOfTomorrowComponent, data: {info: 'day/endOfTomorrow'}},
  {path: 'endOfYesterday', component: EndOfYesterdayComponent, data: {info: 'day/endOfYesterday'}},
  {path: 'getDate', component: GetDateComponent, data: {info: 'day/getDate'}},
  {path: 'getDayOfYear', component: GetDayOfYearComponent, data: {info: 'day/getDayOfYear'}},
  {path: 'isSameDay', component: IsSameDayComponent, data: {info: 'day/isSameDay'}},
  {path: 'isToday', component: IsTodayComponent, data: {info: 'day/isToday'}},
  {path: 'isTomorrow', component: IsTomorrowComponent, data: {info: 'day/isTomorrow'}},
  {path: 'isYesterday', component: IsYesterdayComponent, data: {info: 'day/isYesterday'}},
  {path: 'setDate', component: SetDateComponent, data: {info: 'day/setDate'}},
  {path: 'setDayOfYear', component: SetDayOfYearComponent, data: {info: 'day/setDayOfYear'}},
  {path: 'startOfDay', component: StartOfDayComponent, data: {info: 'day/startOfDay'}},
  {path: 'startOfToday', component: StartOfTodayComponent, data: {info: 'day/startOfToday'}},
  {path: 'startOfTomorrow', component: StartOfTomorrowComponent, data: {info: 'day/startOfTomorrow'}},
  {path: 'startOfYesterday', component: StartOfYesterdayComponent, data: {info: 'day/startOfYesterday'}},
  {path: 'subDays', component: SubDaysComponent, data: {info: 'day/subDays'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayRoutingModule { }
