import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMonthsComponent} from "./add-months/add-months.component";
import {DifferenceInCalendarMonthsComponent} from "./difference-in-calendar-months/difference-in-calendar-months.component";
import {DifferenceInMonthsComponent} from "./difference-in-months/difference-in-months.component";
import {EndOfMonthComponent} from "./end-of-month/end-of-month.component";
import {GetDaysInMonthComponent} from "./get-days-in-month/get-days-in-month.component";
import {GetMonthComponent} from "./get-month/get-month.component";
import {IsFirstDayOfMonthComponent} from "./is-first-day-of-month/is-first-day-of-month.component";
import {IsLastDayOfMonthComponent} from "./is-last-day-of-month/is-last-day-of-month.component";
import {IsSameMonthComponent} from "./is-same-month/is-same-month.component";
import {IsThisMonthComponent} from "./is-this-month/is-this-month.component";
import {LastDayOfMonthComponent} from "./last-day-of-month/last-day-of-month.component";
import {SetMonthComponent} from "./set-month/set-month.component";
import {StartOfMonthComponent} from "./start-of-month/start-of-month.component";
import {SubMonthsComponent} from "./sub-months/sub-months.component";

const routes: Routes = [
  {path: 'addMonths', component: AddMonthsComponent, data: { info: 'month/addMonths'}},
  {path: 'differenceInCalendarMonths', component: DifferenceInCalendarMonthsComponent, data: { info: 'month/differenceInCalendarMonths'}},
  {path: 'differenceInMonths', component: DifferenceInMonthsComponent, data: { info: 'month/differenceInMonths'}},
  {path: 'endOfMonth', component: EndOfMonthComponent, data: { info: 'month/endOfMonth'}},
  {path: 'getDaysInMonth', component: GetDaysInMonthComponent, data: { info: 'month/getDaysInMonth'}},
  {path: 'getMonth', component: GetMonthComponent, data: { info: 'month/getMonth'}},
  {path: 'isFirstDayOfMonth', component: IsFirstDayOfMonthComponent, data: { info: 'month/isFirstDayOfMonth'}},
  {path: 'isLastDayOfMonth', component: IsLastDayOfMonthComponent, data: { info: 'month/isLastDayOfMonth'}},
  {path: 'isSameMonth', component: IsSameMonthComponent, data: { info: 'month/isSameMonth'}},
  {path: 'isThisMonth', component: IsThisMonthComponent, data: { info: 'month/isThisMonth'}},
  {path: 'lastDayOfMonth', component: LastDayOfMonthComponent, data: { info: 'month/lastDayOfMonth'}},
  {path: 'setMonth', component: SetMonthComponent, data: { info: 'month/setMonth'}},
  {path: 'startOfMonth', component: StartOfMonthComponent, data: { info: 'month/startOfMonth'}},
  {path: 'subMonths', component: SubMonthsComponent, data: { info: 'month/subMonths'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthRoutingModule { }
