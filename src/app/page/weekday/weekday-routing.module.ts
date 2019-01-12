import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetDayComponent} from "./get-day/get-day.component";
import {GetISODayComponent} from "./get-isoday/get-isoday.component";
import {IsFridayComponent} from "./is-friday/is-friday.component";
import {IsMondayComponent} from "./is-monday/is-monday.component";
import {IsSaturdayComponent} from "./is-saturday/is-saturday.component";
import {IsSundayComponent} from "./is-sunday/is-sunday.component";
import {IsThursdayComponent} from "./is-thursday/is-thursday.component";
import {IsTuesdayComponent} from "./is-tuesday/is-tuesday.component";
import {IsWednesdayComponent} from "./is-wednesday/is-wednesday.component";
import {IsWeekendComponent} from "./is-weekend/is-weekend.component";
import {SetDayComponent} from "./set-day/set-day.component";
import {SetISODayComponent} from "./set-isoday/set-isoday.component";

const routes: Routes = [
  {path: 'getDay', component: GetDayComponent, data: { info: 'weekday/getDay'}},
  {path: 'getISODay', component: GetISODayComponent, data: { info: 'weekday/getISODay'}},
  {path: 'isFriday', component: IsFridayComponent, data: { info: 'weekday/isFriday'}},
  {path: 'isMonday', component: IsMondayComponent, data: { info: 'weekday/isMonday'}},
  {path: 'isSaturday', component: IsSaturdayComponent, data: { info: 'weekday/isSaturday'}},
  {path: 'isSunday', component: IsSundayComponent, data: { info: 'weekday/isSunday'}},
  {path: 'isThursday', component: IsThursdayComponent, data: { info: 'weekday/isThursday'}},
  {path: 'isTuesday', component: IsTuesdayComponent, data: { info: 'weekday/isTuesday'}},
  {path: 'isWednesday', component: IsWednesdayComponent, data: { info: 'weekday/isWednesday'}},
  {path: 'isWeekend', component: IsWeekendComponent, data: { info: 'weekday/isWeekend'}},
  {path: 'setDay', component: SetDayComponent, data: { info: 'weekday/setDay'}},
  {path: 'setISODay', component: SetISODayComponent, data: { info: 'weekday/setISODay'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekdayRoutingModule { }
