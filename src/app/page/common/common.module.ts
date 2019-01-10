import { NgModule } from '@angular/core';
import { ClosestIndexToComponent } from './closest-index-to/closest-index-to.component';
import {ShareModule} from "../../share/share.module";
import {CommonRoutingModule} from "./common-routing.module";
import { ClosestToComponent } from './closest-to/closest-to.component';
import { CompareAscComponent } from './compare-asc/compare-asc.component';
import { CompareDescComponent } from './compare-desc/compare-desc.component';
import { DistanceInWordsComponent } from './distance-in-words/distance-in-words.component';
import { DistanceInWordsStrictComponent } from './distance-in-words-strict/distance-in-words-strict.component';
import { DistanceInWordsToNowComponent } from './distance-in-words-to-now/distance-in-words-to-now.component';
import { FormatComponent } from './format/format.component';
import { IsAfterComponent } from './is-after/is-after.component';
import { IsBeforeComponent } from './is-before/is-before.component';
import { IsDateComponent } from './is-date/is-date.component';
import { IsEqualComponent } from './is-equal/is-equal.component';
import { IsFeatrueComponent } from './is-featrue/is-featrue.component';
import { IsPastComponent } from './is-past/is-past.component';
import { IsValidComponent } from './is-valid/is-valid.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { ParseComponent } from './parse/parse.component';

@NgModule({
  imports: [
    ShareModule,
    CommonRoutingModule
  ],
  declarations: [
    ClosestIndexToComponent,
    ClosestToComponent,
    CompareAscComponent,
    CompareDescComponent,
    DistanceInWordsComponent,
    DistanceInWordsStrictComponent,
    DistanceInWordsToNowComponent,
    FormatComponent,
    IsAfterComponent,
    IsBeforeComponent,
    IsDateComponent,
    IsEqualComponent,
    IsFeatrueComponent,
    IsPastComponent,
    IsValidComponent,
    MaxComponent,
    MinComponent,
    ParseComponent
  ],
  exports: [
    ClosestIndexToComponent,
    ClosestToComponent,
    CompareAscComponent,
    CompareDescComponent,
    DistanceInWordsComponent,
    DistanceInWordsStrictComponent,
    DistanceInWordsToNowComponent,
    FormatComponent,
    IsAfterComponent,
    IsBeforeComponent,
    IsDateComponent,
    IsEqualComponent,
    IsFeatrueComponent,
    IsPastComponent,
    IsValidComponent,
    MaxComponent,
    MinComponent,
    ParseComponent
  ]
})
export class CommonModule { }
