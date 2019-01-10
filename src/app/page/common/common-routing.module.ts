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
import {IsAfterComponent} from "./is-after/is-after.component";
import {IsBeforeComponent} from "./is-before/is-before.component";
import {IsDateComponent} from "./is-date/is-date.component";
import {IsEqualComponent} from "./is-equal/is-equal.component";
import {IsFeatrueComponent} from "./is-featrue/is-featrue.component";
import {IsPastComponent} from "./is-past/is-past.component";
import {IsValidComponent} from "./is-valid/is-valid.component";
import {MaxComponent} from "./max/max.component";
import {MinComponent} from "./min/min.component";
import {ParseComponent} from "./parse/parse.component";

const routes: Routes = [
  {path: 'closestIndexTo', component: ClosestIndexToComponent, data: {info: 'common/closestIndexTo'}},
  {path: 'closestTo', component: ClosestToComponent, data: {info: 'common/closestTo'}},
  {path: 'compareAsc', component: CompareAscComponent, data: {info: 'common/compareAsc'}},
  {path: 'compareDesc', component: CompareDescComponent, data: {info: 'common/compareDesc'}},
  {path: 'distanceInWords', component: DistanceInWordsComponent, data: {info: 'common/distanceInWords'}},
  {path: 'distanceInWordsStrict', component: DistanceInWordsStrictComponent, data: {info: 'common/distanceInWordsStrict'}},
  {path: 'distanceInWordsToNow', component: DistanceInWordsToNowComponent, data: {info: 'common/distanceInWordsToNow'}},
  {path: 'format', component: FormatComponent, data: {info: 'common/format'}},
  {path: 'isAfter', component: IsAfterComponent, data: {info: 'common/isAfter'}},
  {path: 'isBefore', component: IsBeforeComponent, data: {info: 'common/isBefore'}},
  {path: 'isDate', component: IsDateComponent, data: {info: 'common/isDate'}},
  {path: 'isEqual', component: IsEqualComponent, data: {info: 'common/isEqual'}},
  {path: 'isFeatrue', component: IsFeatrueComponent, data: {info: 'common/isFeatrue'}},
  {path: 'isPast', component: IsPastComponent, data: {info: 'common/isPast'}},
  {path: 'isValid', component: IsValidComponent, data: {info: 'common/isValid'}},
  {path: 'max', component: MaxComponent, data: {info: 'common/max'}},
  {path: 'min', component: MinComponent, data: {info: 'common/min'}},
  {path: 'parse', component: ParseComponent, data: {info: 'common/parse'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
