import { NgModule } from '@angular/core'

import { QuarterRoutingModule } from './quarter-routing.module';
import { AddQuartersComponent } from './add-quarters/add-quarters.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInCalendarQuartersComponent } from './difference-in-calendar-quarters/difference-in-calendar-quarters.component';
import { DifferenceInQuartersComponent } from './difference-in-quarters/difference-in-quarters.component';
import { EndOfQuarterComponent } from './end-of-quarter/end-of-quarter.component';
import { GetQuarterComponent } from './get-quarter/get-quarter.component';
import { IsSameQuarterComponent } from './is-same-quarter/is-same-quarter.component';
import { IsThisQuarterComponent } from './is-this-quarter/is-this-quarter.component';
import { LastDayOfQuarterComponent } from './last-day-of-quarter/last-day-of-quarter.component';
import { SetQuarterComponent } from './set-quarter/set-quarter.component';
import { StartOfQuarterComponent } from './start-of-quarter/start-of-quarter.component';
import { SubQuartersComponent } from './sub-quarters/sub-quarters.component';

@NgModule({
  declarations: [
    AddQuartersComponent,
    DifferenceInCalendarQuartersComponent,
    DifferenceInQuartersComponent,
    EndOfQuarterComponent,
    GetQuarterComponent,
    IsSameQuarterComponent,
    IsThisQuarterComponent,
    LastDayOfQuarterComponent,
    SetQuarterComponent,
    StartOfQuarterComponent,
    SubQuartersComponent
  ],
  exports: [
    AddQuartersComponent,
    DifferenceInCalendarQuartersComponent,
    DifferenceInQuartersComponent,
    EndOfQuarterComponent,
    GetQuarterComponent,
    IsSameQuarterComponent,
    IsThisQuarterComponent,
    LastDayOfQuarterComponent,
    SetQuarterComponent,
    StartOfQuarterComponent,
    SubQuartersComponent
  ],
  imports: [
    ShareModule,
    QuarterRoutingModule
  ]
})
export class QuarterModule { }
