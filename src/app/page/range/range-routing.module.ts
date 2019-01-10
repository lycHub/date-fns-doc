import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreRangesOverlappingComponent} from "./are-ranges-overlapping/are-ranges-overlapping.component";

const routes: Routes = [
  {path: 'areRangesOverlapping', component: AreRangesOverlappingComponent, data: {info: 'range/areRangesOverlapping'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangeRoutingModule { }
