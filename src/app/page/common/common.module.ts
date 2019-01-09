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
    FormatComponent
  ],
  exports: [
    ClosestIndexToComponent,
    ClosestToComponent,
    CompareAscComponent,
    CompareDescComponent,
    DistanceInWordsComponent,
    DistanceInWordsStrictComponent,
    DistanceInWordsToNowComponent,
    FormatComponent
  ]
})
export class CommonModule { }
