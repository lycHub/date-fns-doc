import { NgModule } from '@angular/core';

import {ShareModule} from "../../share/share.module";
import { GetStartComponent } from './get-start/get-start.component';
import {GeneralRoutingModule} from "./general-routing.module";

@NgModule({
  declarations: [GetStartComponent],
  imports: [
    ShareModule,
    GeneralRoutingModule
  ],
  exports: [GetStartComponent]
})
export class GeneralModule { }
