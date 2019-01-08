import { NgModule } from '@angular/core';
import {HomeModule} from "./home/home.module";
import {CommonModule} from "./common/common.module";

@NgModule({
  imports: [
    HomeModule, CommonModule
  ],
  exports: [HomeModule, CommonModule],
  declarations: []
})
export class PagesModule { }
