import { NgModule } from '@angular/core';
import { ClosestIndexToComponent } from './closest-index-to/closest-index-to.component';
import {ShareModule} from "../../share/share.module";
import {CommonRoutingModule} from "./common-routing.module";
import { ClosestToComponent } from './closest-to/closest-to.component';

@NgModule({
  imports: [
    ShareModule,
    CommonRoutingModule
  ],
  declarations: [ClosestIndexToComponent, ClosestToComponent],
  exports: [ClosestIndexToComponent, ClosestToComponent]
})
export class CommonModule { }
