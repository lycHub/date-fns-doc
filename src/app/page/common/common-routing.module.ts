import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClosestIndexToComponent} from "./closest-index-to/closest-index-to.component";
import {ClosestToComponent} from "./closest-to/closest-to.component";
import {CompareAscComponent} from "./compare-asc/compare-asc.component";
import {CompareDescComponent} from "./compare-desc/compare-desc.component";
import {DistanceInWordsComponent} from "./distance-in-words/distance-in-words.component";
import {DistanceInWordsStrictComponent} from "./distance-in-words-strict/distance-in-words-strict.component";
import {DistanceInWordsToNowComponent} from "./distance-in-words-to-now/distance-in-words-to-now.component";
import {FormatComponent} from "./format/format.component";

const routes: Routes = [
  {path: 'closestIndexTo', component: ClosestIndexToComponent, data: {info: 'common/closestIndexTo'}},
  {path: 'closestTo', component: ClosestToComponent, data: {info: 'common/closestTo'}},
  {path: 'compareAsc', component: CompareAscComponent, data: {info: 'common/compareAsc'}},
  {path: 'compareDesc', component: CompareDescComponent, data: {info: 'common/compareDesc'}},
  {path: 'distanceInWords', component: DistanceInWordsComponent, data: {info: 'common/distanceInWords'}},
  {path: 'distanceInWordsStrict', component: DistanceInWordsStrictComponent, data: {info: 'common/distanceInWordsStrict'}},
  {path: 'distanceInWordsToNow', component: DistanceInWordsToNowComponent, data: {info: 'common/distanceInWordsToNow'}},
  {path: 'format', component: FormatComponent, data: {info: 'common/format'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
