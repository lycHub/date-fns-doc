import { NgModule } from '@angular/core';

import { HourRoutingModule } from './hour-routing.module';
import { AddHoursComponent } from './add-hours/add-hours.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInHoursComponent } from './difference-in-hours/difference-in-hours.component';
import { EndOfHourComponent } from './end-of-hour/end-of-hour.component';
import { GetHoursComponent } from './get-hours/get-hours.component';
import { IsSameHourComponent } from './is-same-hour/is-same-hour.component';
import { SetHoursComponent } from './set-hours/set-hours.component';
import { StartOfHourComponent } from './start-of-hour/start-of-hour.component';
import { SubHoursComponent } from './sub-hours/sub-hours.component';

@NgModule({
  declarations: [
    AddHoursComponent,
    DifferenceInHoursComponent,
    EndOfHourComponent,
    GetHoursComponent,
    IsSameHourComponent,
    SetHoursComponent,
    StartOfHourComponent,
    SubHoursComponent
  ],
  imports: [
    ShareModule,
    HourRoutingModule
  ],
  exports: [
    AddHoursComponent,
    DifferenceInHoursComponent,
    EndOfHourComponent,
    GetHoursComponent,
    IsSameHourComponent,
    SetHoursComponent,
    StartOfHourComponent,
    SubHoursComponent
  ]
})
export class HourModule { }
