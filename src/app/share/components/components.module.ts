import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLayoutComponent} from "./page-layout/page-layout.component";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [PageLayoutComponent]
})
export class ComponentsModule { }
