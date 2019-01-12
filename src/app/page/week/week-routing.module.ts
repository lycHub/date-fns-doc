import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddWeeksComponent} from "./add-weeks/add-weeks.component";
import {DifferenceInCalendarWeeksComponent} from "./difference-in-calendar-weeks/difference-in-calendar-weeks.component";
import {DifferenceInWeeksComponent} from "./difference-in-weeks/difference-in-weeks.component";
import {EndOfWeekComponent} from "./end-of-week/end-of-week.component";
import {IsSameWeekComponent} from "./is-same-week/is-same-week.component";
import {IsThisWeekComponent} from "./is-this-week/is-this-week.component";
import {LastDayOfWeekComponent} from "./last-day-of-week/last-day-of-week.component";
import {StartOfWeekComponent} from "./start-of-week/start-of-week.component";
import {SubWeeksComponent} from "./sub-weeks/sub-weeks.component";

const routes: Routes = [
  {path: 'addWeeks', component: AddWeeksComponent, data: { info: 'week/addWeeks' }},
  {path: 'differenceInCalendarWeeks', component: DifferenceInCalendarWeeksComponent, data: { info: 'week/differenceInCalendarWeeks' }},
  {path: 'differenceInWeeks', component: DifferenceInWeeksComponent, data: { info: 'week/differenceInWeeks' }},
  {path: 'endOfWeek', component: EndOfWeekComponent, data: { info: 'week/endOfWeek' }},
  {path: 'isSameWeek', component: IsSameWeekComponent, data: { info: 'week/isSameWeek' }},
  {path: 'isThisWeek', component: IsThisWeekComponent, data: { info: 'week/isThisWeek' }},
  {path: 'lastDayOfWeek', component: LastDayOfWeekComponent, data: { info: 'week/lastDayOfWeek' }},
  {path: 'startOfWeek', component: StartOfWeekComponent, data: { info: 'week/startOfWeek' }},
  {path: 'subWeeks', component: SubWeeksComponent, data: { info: 'week/subWeeks' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekRoutingModule { }
