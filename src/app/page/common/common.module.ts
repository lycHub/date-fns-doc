import { NgModule } from '@angular/core';
import { ClosestIndexToComponent } from './closest-index-to/closest-index-to.component';
import {ShareModule} from "../../share/share.module";
import {CommonRoutingModule} from "./common-routing.module";
import { ClosestToComponent } from './closest-to/closest-to.component';
import { CompareAscComponent } from './compare-asc/compare-asc.component';

@NgModule({
  imports: [
    ShareModule,
    CommonRoutingModule
  ],
  declarations: [
    ClosestIndexToComponent,
    ClosestToComponent,
    CompareAscComponent
  ],
  exports: [
    ClosestIndexToComponent,
    ClosestToComponent,
    CompareAscComponent
  ]
})
export class CommonModule { }
