import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClosestIndexToComponent} from "./closest-index-to/closest-index-to.component";

const routes: Routes = [
  {path: '', component: ClosestIndexToComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
