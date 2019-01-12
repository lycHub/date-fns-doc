import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddQuartersComponent} from "./add-quarters/add-quarters.component";
import {DifferenceInCalendarQuartersComponent} from "./difference-in-calendar-quarters/difference-in-calendar-quarters.component";
import {DifferenceInQuartersComponent} from "./difference-in-quarters/difference-in-quarters.component";
import {EndOfQuarterComponent} from "./end-of-quarter/end-of-quarter.component";
import {GetQuarterComponent} from "./get-quarter/get-quarter.component";
import {IsSameQuarterComponent} from "./is-same-quarter/is-same-quarter.component";
import {IsThisQuarterComponent} from "./is-this-quarter/is-this-quarter.component";
import {SetQuarterComponent} from "./set-quarter/set-quarter.component";
import {StartOfQuarterComponent} from "./start-of-quarter/start-of-quarter.component";
import {SubQuartersComponent} from "./sub-quarters/sub-quarters.component";

const routes: Routes = [
  {path: 'addQuarters', component: AddQuartersComponent, data: { info: 'month/addQuarters'}},
  {path: 'differenceInCalendarQuarters', component: DifferenceInCalendarQuartersComponent, data: { info: 'quarter/differenceInCalendarQuarters'}},
  {path: 'differenceInQuarters', component: DifferenceInQuartersComponent, data: { info: 'quarter/differenceInQuarters'}},
  {path: 'endOfQuarter', component: EndOfQuarterComponent, data: { info: 'quarter/endOfQuarter'}},
  {path: 'getQuarter', component: GetQuarterComponent, data: { info: 'quarter/getQuarter'}},
  {path: 'isSameQuarter', component: IsSameQuarterComponent, data: { info: 'quarter/isSameQuarter'}},
  {path: 'isThisQuarter', component: IsThisQuarterComponent, data: { info: 'quarter/isThisQuarter'}},
  {path: 'setQuarter', component: SetQuarterComponent, data: { info: 'quarter/setQuarter'}},
  {path: 'startOfQuarter', component: StartOfQuarterComponent, data: { info: 'quarter/startOfQuarter'}},
  {path: 'subQuarters', component: SubQuartersComponent, data: { info: 'quarter/subQuarters'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuarterRoutingModule { }
