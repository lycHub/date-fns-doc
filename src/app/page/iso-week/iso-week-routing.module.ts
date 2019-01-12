import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DifferenceInCalendarISOWeeksComponent} from "./difference-in-calendar-isoweeks/difference-in-calendar-isoweeks.component";
import {EndOfISOWeekComponent} from "./end-of-isoweek/end-of-isoweek.component";
import {GetISOWeekComponent} from "./get-isoweek/get-isoweek.component";
import {IsSameISOWeekComponent} from "./is-same-isoweek/is-same-isoweek.component";
import {IsThisISOWeekComponent} from "./is-this-isoweek/is-this-isoweek.component";
import {LastDayOfISOWeekComponent} from "./last-day-of-isoweek/last-day-of-isoweek.component";
import {SetISOWeekComponent} from "./set-isoweek/set-isoweek.component";
import {StartOfISOWeekComponent} from "./start-of-isoweek/start-of-isoweek.component";

const routes: Routes = [
  {path: 'differenceInCalendarISOWeeks', component: DifferenceInCalendarISOWeeksComponent, data: { info: 'iSO-Week/differenceInCalendarISOWeeks'}},
  {path: 'endOfISOWeek', component: EndOfISOWeekComponent, data: { info: 'iSO-Week/endOfISOWeek'}},
  {path: 'getISOWeek', component: GetISOWeekComponent, data: { info: 'iSO-Week/getISOWeek'}},
  {path: 'isSameISOWeek', component: IsSameISOWeekComponent, data: { info: 'iSO-Week/isSameISOWeek'}},
  {path: 'isThisISOWeek', component: IsThisISOWeekComponent, data: { info: 'iSO-Week/isThisISOWeek'}},
  {path: 'lastDayOfISOWeek', component: LastDayOfISOWeekComponent, data: { info: 'iSO-Week/lastDayOfISOWeek'}},
  {path: 'setISOWeek', component: SetISOWeekComponent, data: { info: 'iSO-Week/setISOWeek'}},
  {path: 'startOfISOWeek', component: StartOfISOWeekComponent, data: { info: 'iSO-Week/startOfISOWeek'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsoWeekRoutingModule { }
