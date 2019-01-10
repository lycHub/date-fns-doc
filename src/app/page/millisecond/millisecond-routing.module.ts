import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMillisecondsComponent} from "./add-milliseconds/add-milliseconds.component";
import {DifferenceInMillisecondsComponent} from "./difference-in-milliseconds/difference-in-milliseconds.component";
import {GetMillisecondsComponent} from "./get-milliseconds/get-milliseconds.component";
import {SetMillisecondsComponent} from "./set-milliseconds/set-milliseconds.component";
import {SubMillisecondsComponent} from "./sub-milliseconds/sub-milliseconds.component";

const routes: Routes = [
  {path: 'addMilliseconds', component: AddMillisecondsComponent, data: {info: 'millisecond/addMilliseconds'}},
  {path: 'differenceInMilliseconds', component: DifferenceInMillisecondsComponent, data: {info: 'millisecond/differenceInMilliseconds'}},
  {path: 'getMilliseconds', component: GetMillisecondsComponent, data: {info: 'millisecond/getMilliseconds'}},
  {path: 'setMilliseconds', component: SetMillisecondsComponent, data: {info: 'millisecond/setMilliseconds'}},
  {path: 'subMilliseconds', component: SubMillisecondsComponent, data: {info: 'millisecond/subMilliseconds'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MillisecondRoutingModule { }
