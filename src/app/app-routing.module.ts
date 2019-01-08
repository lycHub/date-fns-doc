import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "./page/common/common.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {path: 'closestIndexTo', loadChildren: './page/common/common.module#CommonModule'}
  // {path: 'closestIndexTo', loadChildren: () => CommonModule},
  // {path: 'closestTo', loadChildren: () => CommonModule}
  // {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
