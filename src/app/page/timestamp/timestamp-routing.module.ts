import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetTimeComponent} from "./get-time/get-time.component";

const routes: Routes = [
  {path: 'getTime', component: GetTimeComponent, data: {info: 'timestamp/getTime'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimestampRoutingModule { }
