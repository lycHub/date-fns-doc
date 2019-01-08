import { NgModule } from '@angular/core';
import { ClosestIndexToComponent } from './closest-index-to/closest-index-to.component';
import {ShareModule} from "../../share/share.module";
import {CommonRoutingModule} from "./common-routing.module";

@NgModule({
  imports: [
    ShareModule,
    CommonRoutingModule
  ],
  declarations: [ClosestIndexToComponent],
  exports: [ClosestIndexToComponent]
})
export class CommonModule { }
