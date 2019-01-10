import { NgModule } from '@angular/core';
import {HomeModule} from "./home/home.module";
import {CommonModule} from "./common/common.module";
import {RangeModule} from "./range/range.module";

@NgModule({
  imports: [
    HomeModule, CommonModule, RangeModule
  ],
  exports: [HomeModule, CommonModule, RangeModule],
  declarations: []
})
export class PagesModule { }
