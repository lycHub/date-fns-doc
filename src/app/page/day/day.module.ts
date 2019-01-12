import { NgModule } from '@angular/core';
import {DayRoutingModule} from "./day-routing.module";
import {ShareModule} from "../../share/share.module";
import { AddDaysComponent } from './add-days/add-days.component';

@NgModule({
  declarations: [
    AddDaysComponent
  ],
  imports: [
    DayRoutingModule,
    ShareModule
  ],
  exports: [
    AddDaysComponent
  ]
})
export class DayModule { }
