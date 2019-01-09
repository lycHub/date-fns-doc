import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClosestIndexToComponent} from "./closest-index-to/closest-index-to.component";
import {ClosestToComponent} from "./closest-to/closest-to.component";
import {CompareAscComponent} from "./compare-asc/compare-asc.component";

const routes: Routes = [
  {path: 'closestIndexTo', component: ClosestIndexToComponent, data: {info: 'common/closestIndexTo'}},
  {path: 'closestTo', component: ClosestToComponent, data: {info: 'common/closestTo'}},
  {path: 'compareAsc', component: CompareAscComponent, data: {info: 'common/compareAsc'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
