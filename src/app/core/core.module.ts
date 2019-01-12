import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {ShareModule} from "../share/share.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {NZ_I18N, zh_CN} from "ng-zorro-antd";
import zh from '@angular/common/locales/zh';
import {PagesModule} from "../page/page.module";
registerLocaleData(zh);

@NgModule({
  imports: [
    ShareModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule
  ],
  exports: [
    AppRoutingModule,
    ShareModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class CoreModule { }
