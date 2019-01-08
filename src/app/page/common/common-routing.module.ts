import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClosestIndexToComponent} from "./closest-index-to/closest-index-to.component";
import {ClosestToComponent} from "./closest-to/closest-to.component";

const routes: Routes = [
  {path: 'closestIndexTo', component: ClosestIndexToComponent, data: {belongTo: 'common'}},
  {path: 'closestTo', component: ClosestToComponent, data: {belongTo: 'common'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
