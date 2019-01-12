import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetStartComponent} from "./get-start/get-start.component";

const routes: Routes = [
  {path: 'getStart', component: GetStartComponent, data: { info: 'general/getStart' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
