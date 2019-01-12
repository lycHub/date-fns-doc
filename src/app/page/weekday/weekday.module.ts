import { NgModule } from '@angular/core';

import { WeekdayRoutingModule } from './weekday-routing.module';
import { GetDayComponent } from './get-day/get-day.component';
import {ShareModule} from "../../share/share.module";
import { GetISODayComponent } from './get-isoday/get-isoday.component';
import { IsFridayComponent } from './is-friday/is-friday.component';
import { IsMondayComponent } from './is-monday/is-monday.component';
import { IsSaturdayComponent } from './is-saturday/is-saturday.component';
import { IsSundayComponent } from './is-sunday/is-sunday.component';
import {IsThursdayComponent} from "./is-thursday/is-thursday.component";
import { IsTuesdayComponent } from './is-tuesday/is-tuesday.component';
import { IsWednesdayComponent } from './is-wednesday/is-wednesday.component';
import { IsWeekendComponent } from './is-weekend/is-weekend.component';
import { SetDayComponent } from './set-day/set-day.component';
import { SetISODayComponent } from './set-isoday/set-isoday.component';

@NgModule({
  declarations: [
    GetDayComponent,
    GetISODayComponent,
    IsFridayComponent,
    IsMondayComponent,
    IsSaturdayComponent,
    IsSundayComponent,
    IsThursdayComponent,
    IsTuesdayComponent,
    IsWednesdayComponent,
    IsWednesdayComponent,
    IsWeekendComponent,
    SetDayComponent,
    SetISODayComponent
  ],
  imports: [
    ShareModule,
    WeekdayRoutingModule
  ],
  exports: [
    GetDayComponent,
    GetISODayComponent,
    IsFridayComponent,
    IsMondayComponent,
    IsSaturdayComponent,
    IsSundayComponent,
    IsThursdayComponent,
    IsTuesdayComponent,
    IsWednesdayComponent,
    IsWeekendComponent,
    SetISODayComponent
  ]
})
export class WeekdayModule { }
