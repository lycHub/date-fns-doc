import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreRangesOverlappingComponent} from "./are-ranges-overlapping/are-ranges-overlapping.component";
import {GetOverlappingDaysInRangesComponent} from "./get-overlapping-days-in-ranges/get-overlapping-days-in-ranges.component";
import {IsWithinRangeComponent} from "./is-within-range/is-within-range.component";

const routes: Routes = [
  {path: 'areRangesOverlapping', component: AreRangesOverlappingComponent, data: {info: 'range/areRangesOverlapping'}},
  {path: 'getOverlappingDaysInRanges', component: GetOverlappingDaysInRangesComponent, data: {info: 'range/getOverlappingDaysInRanges'}},
  {path: 'getOverlappingDaysInRanges', component: GetOverlappingDaysInRangesComponent, data: {info: 'range/getOverlappingDaysInRanges'}},
  {path: 'isWithinRange', component: IsWithinRangeComponent, data: {info: 'range/isWithinRange'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangeRoutingModule { }
