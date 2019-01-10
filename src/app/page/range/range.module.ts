import { NgModule } from '@angular/core';

import { RangeRoutingModule } from './range-routing.module';
import {ShareModule} from "../../share/share.module";
import { AreRangesOverlappingComponent } from './are-ranges-overlapping/are-ranges-overlapping.component';

@NgModule({
  declarations: [AreRangesOverlappingComponent],
  imports: [
    ShareModule,
    RangeRoutingModule
  ],
  exports: [AreRangesOverlappingComponent]
})
export class RangeModule { }
