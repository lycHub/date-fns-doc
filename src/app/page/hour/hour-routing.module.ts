import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddHoursComponent} from "./add-hours/add-hours.component";
import {DifferenceInHoursComponent} from "./difference-in-hours/difference-in-hours.component";
import {EndOfHourComponent} from "./end-of-hour/end-of-hour.component";
import {GetHoursComponent} from "./get-hours/get-hours.component";
import {IsSameHourComponent} from "./is-same-hour/is-same-hour.component";
import {SetHoursComponent} from "./set-hours/set-hours.component";
import {StartOfHourComponent} from "./start-of-hour/start-of-hour.component";
import {SubHoursComponent} from "./sub-hours/sub-hours.component";

const routes: Routes = [
  {path: 'addHours', component: AddHoursComponent, data: {info: 'hour/addHours'}},
  {path: 'differenceInHours', component: DifferenceInHoursComponent, data: {info: 'hour/differenceInHours'}},
  {path: 'endOfHour', component: EndOfHourComponent, data: {info: 'hour/endOfHour'}},
  {path: 'getHours', component: GetHoursComponent, data: {info: 'hour/getHours'}},
  {path: 'isSameHour', component: IsSameHourComponent, data: {info: 'hour/isSameHour'}},
  {path: 'setHours', component: SetHoursComponent, data: {info: 'hour/setHours'}},
  {path: 'startOfHour', component: StartOfHourComponent, data: {info: 'hour/startOfHour'}},
  {path: 'subHours', component: SubHoursComponent, data: {info: 'hour/subHours'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRoutingModule { }
