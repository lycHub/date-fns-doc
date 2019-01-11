import { NgModule } from '@angular/core';

import { MinuteRoutingModule } from './minute-routing.module';
import { AddMinutesComponent } from './add-minutes/add-minutes.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInMinutesComponent } from './difference-in-minutes/difference-in-minutes.component';
import { EndOfMinuteComponent } from './end-of-minute/end-of-minute.component';
import { GetMinutesComponent } from './get-minutes/get-minutes.component';
import { IsSameMinuteComponent } from './is-same-minute/is-same-minute.component';
import { SetMinutesComponent } from './set-minutes/set-minutes.component';
import { StartOfMinuteComponent } from './start-of-minute/start-of-minute.component';
import { SubMinutesComponent } from './sub-minutes/sub-minutes.component';

@NgModule({
  declarations: [
    AddMinutesComponent,
    DifferenceInMinutesComponent,
    EndOfMinuteComponent,
    GetMinutesComponent,
    IsSameMinuteComponent,
    SetMinutesComponent,
    StartOfMinuteComponent,
    SubMinutesComponent
  ],
  imports: [
    ShareModule,
    MinuteRoutingModule
  ],
  exports: [
    AddMinutesComponent,
    DifferenceInMinutesComponent,
    EndOfMinuteComponent,
    GetMinutesComponent,
    IsSameMinuteComponent,
    SetMinutesComponent,
    StartOfMinuteComponent,
    SubMinutesComponent
  ]
})
export class MinuteModule { }
