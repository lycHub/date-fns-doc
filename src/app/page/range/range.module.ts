import { NgModule } from '@angular/core';

import { RangeRoutingModule } from './range-routing.module';
import {ShareModule} from "../../share/share.module";
import { AreRangesOverlappingComponent } from './are-ranges-overlapping/are-ranges-overlapping.component';
import { GetOverlappingDaysInRangesComponent } from './get-overlapping-days-in-ranges/get-overlapping-days-in-ranges.component';
import { IsWithinRangeComponent } from './is-within-range/is-within-range.component';

@NgModule({
  declarations: [AreRangesOverlappingComponent, GetOverlappingDaysInRangesComponent, IsWithinRangeComponent],
  imports: [
    ShareModule,
    RangeRoutingModule
  ],
  exports: [AreRangesOverlappingComponent, GetOverlappingDaysInRangesComponent, IsWithinRangeComponent]
})
export class RangeModule { }
