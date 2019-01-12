import { NgModule } from '@angular/core';
import {HomeModule} from "./home/home.module";
import {CommonModule} from "./common/common.module";
import {RangeModule} from "./range/range.module";
import {TimestampModule} from "./timestamp/timestamp.module";
import {MillisecondModule} from "./millisecond/millisecond.module";
import {SecondModule} from "./second/second.module";
import {MinuteModule} from "./minute/minute.module";
import {HourModule} from "./hour/hour.module";
import {DayModule} from "./day/day.module";

@NgModule({
  imports: [
    HomeModule, CommonModule, RangeModule, TimestampModule, MillisecondModule, SecondModule, MinuteModule, HourModule, DayModule
  ],
  exports: [HomeModule, CommonModule, RangeModule, TimestampModule, MillisecondModule, SecondModule, MinuteModule, HourModule, DayModule],
  declarations: []
})
export class PagesModule { }
