import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSecondsComponent} from "./add-seconds/add-seconds.component";
import {DifferenceInSecondsComponent} from "./difference-in-seconds/difference-in-seconds.component";
import {EndOfSecondComponent} from "./end-of-second/end-of-second.component";
import {GetSecondsComponent} from "./get-seconds/get-seconds.component";
import {IsSameSecondComponent} from "./is-same-second/is-same-second.component";
import {IsThisSecondComponent} from "./is-this-second/is-this-second.component";

const routes: Routes = [
  {path: 'addSeconds', component: AddSecondsComponent, data: {info: 'second/addSeconds'}},
  {path: 'differenceInSeconds', component: DifferenceInSecondsComponent, data: {info: 'second/differenceInSeconds'}},
  {path: 'endOfSecond', component: EndOfSecondComponent, data: {info: 'second/endOfSecond'}},
  {path: 'getSeconds', component: GetSecondsComponent, data: {info: 'second/getSeconds'}},
  {path: 'isSameSecond', component: IsSameSecondComponent, data: {info: 'second/isSameSecond'}},
  {path: 'isThisSecond', component: IsThisSecondComponent, data: {info: 'second/isThisSecond'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
