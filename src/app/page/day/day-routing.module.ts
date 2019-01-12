import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDaysComponent} from "./add-days/add-days.component";

const routes: Routes = [
  {path: 'addDays', component: AddDaysComponent, data: {info: 'day/addDays'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayRoutingModule { }
