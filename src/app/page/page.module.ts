import { NgModule } from '@angular/core';
import {GeneralModule} from "./general/general.module";
import {CommonModule} from "./common/common.module";
import {RangeModule} from "./range/range.module";
import {TimestampModule} from "./timestamp/timestamp.module";
import {MillisecondModule} from "./millisecond/millisecond.module";
import {SecondModule} from "./second/second.module";
import {MinuteModule} from "./minute/minute.module";
import {HourModule} from "./hour/hour.module";
import {DayModule} from "./day/day.module";
import {WeekdayModule} from "./weekday/weekday.module";
import {WeekModule} from "./week/week.module";
import {MonthModule} from "./month/month.module";
import {QuarterModule} from "./quarter/quarter.module";
import {YearModule} from "./year/year.module";
import {IsoWeekModule} from "./iso-week/iso-week.module";
import {IsoWeekNumberModule} from "./iso-week-number/iso-week-number.module";

@NgModule({
  imports: [
    GeneralModule, CommonModule, RangeModule, TimestampModule, MillisecondModule, SecondModule, MinuteModule, HourModule, DayModule, WeekdayModule, WeekModule, MonthModule, QuarterModule, YearModule, IsoWeekModule, IsoWeekNumberModule
  ],
  exports: [GeneralModule, CommonModule, RangeModule, TimestampModule, MillisecondModule, SecondModule, MinuteModule, HourModule, DayModule, WeekdayModule, WeekModule, MonthModule, QuarterModule, YearModule, IsoWeekModule, IsoWeekNumberModule]
})
export class PagesModule { }
