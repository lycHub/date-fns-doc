import { NgModule } from '@angular/core';

import { SecondRoutingModule } from './second-routing.module';
import { AddSecondsComponent } from './add-seconds/add-seconds.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInSecondsComponent } from './difference-in-seconds/difference-in-seconds.component';
import { EndOfSecondComponent } from './end-of-second/end-of-second.component';
import { GetSecondsComponent } from './get-seconds/get-seconds.component';
import { IsSameSecondComponent } from './is-same-second/is-same-second.component';
import { IsThisSecondComponent } from './is-this-second/is-this-second.component';

@NgModule({
  declarations: [
    AddSecondsComponent,
    DifferenceInSecondsComponent,
    EndOfSecondComponent,
    GetSecondsComponent,
    IsSameSecondComponent,
    IsThisSecondComponent
  ],
  imports: [
    ShareModule,
    SecondRoutingModule
  ],
  exports: [
    AddSecondsComponent,
    DifferenceInSecondsComponent,
    EndOfSecondComponent,
    GetSecondsComponent,
    IsSameSecondComponent,
    IsThisSecondComponent
  ]
})
export class SecondModule { }
