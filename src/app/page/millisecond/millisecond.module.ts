import { NgModule } from '@angular/core';

import { MillisecondRoutingModule } from './millisecond-routing.module';
import { AddMillisecondsComponent } from './add-milliseconds/add-milliseconds.component';
import {ShareModule} from "../../share/share.module";
import { DifferenceInMillisecondsComponent } from './difference-in-milliseconds/difference-in-milliseconds.component';
import { GetMillisecondsComponent } from './get-milliseconds/get-milliseconds.component';
import { SetMillisecondsComponent } from './set-milliseconds/set-milliseconds.component';
import { SubMillisecondsComponent } from './sub-milliseconds/sub-milliseconds.component';

@NgModule({
  declarations: [
    AddMillisecondsComponent,
    DifferenceInMillisecondsComponent,
    GetMillisecondsComponent,
    SetMillisecondsComponent,
    SubMillisecondsComponent
  ],
  imports: [
    ShareModule,
    MillisecondRoutingModule
  ],
  exports: [
    AddMillisecondsComponent,
    DifferenceInMillisecondsComponent,
    GetMillisecondsComponent,
    SetMillisecondsComponent,
    SubMillisecondsComponent
  ]
})
export class MillisecondModule { }
