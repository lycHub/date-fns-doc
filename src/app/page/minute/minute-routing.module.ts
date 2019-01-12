import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMinutesComponent} from "./add-minutes/add-minutes.component";
import {DifferenceInMinutesComponent} from "./difference-in-minutes/difference-in-minutes.component";
import {EndOfMinuteComponent} from "./end-of-minute/end-of-minute.component";
import {GetMinutesComponent} from "./get-minutes/get-minutes.component";
import {IsSameMinuteComponent} from "./is-same-minute/is-same-minute.component";
import {SetMinutesComponent} from "./set-minutes/set-minutes.component";
import {StartOfMinuteComponent} from "./start-of-minute/start-of-minute.component";
import {SubMinutesComponent} from "./sub-minutes/sub-minutes.component";
import {IsThisMinuteComponent} from "./is-this-minute/is-this-minute.component";

const routes: Routes = [
  {path: 'addMinutes', component: AddMinutesComponent, data: {info: 'minute/addMinutes'}},
  {path: 'differenceInMinutes', component: DifferenceInMinutesComponent, data: {info: 'minute/differenceInMinutes'}},
  {path: 'endOfMinute', component: EndOfMinuteComponent, data: {info: 'minute/endOfMinute'}},
  {path: 'getMinutes', component: GetMinutesComponent, data: {info: 'minute/getMinutes'}},
  {path: 'isSameMinute', component: IsSameMinuteComponent, data: {info: 'minute/isSameMinute'}},
  {path: 'isThisMinute', component: IsThisMinuteComponent, data: {info: 'minute/isThisMinute'}},
  {path: 'setMinutes', component: SetMinutesComponent, data: {info: 'minute/setMinutes'}},
  {path: 'startOfMinute', component: StartOfMinuteComponent, data: {info: 'minute/startOfMinute'}},
  {path: 'subMinutes', component: SubMinutesComponent, data: {info: 'minute/subMinutes'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinuteRoutingModule { }
