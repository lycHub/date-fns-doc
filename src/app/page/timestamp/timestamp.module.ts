import { NgModule } from '@angular/core';

import { TimestampRoutingModule } from './timestamp-routing.module';
import { GetTimeComponent } from './get-time/get-time.component';
import {ShareModule} from "../../share/share.module";

@NgModule({
  declarations: [GetTimeComponent],
  imports: [
    ShareModule,
    TimestampRoutingModule
  ],
  exports: [GetTimeComponent]
})
export class TimestampModule { }
