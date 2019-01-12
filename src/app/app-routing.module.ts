import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/getStart',
    pathMatch: 'full'
  },
  // {path: 'closestIndexTo', loadChildren: './page/common/common.module#CommonModule'}
  // {path: 'closestIndexTo', loadChildren: () => CommonModule},
  // {path: 'closestTo', loadChildren: () => CommonModule}
  // {path: '**', redirectTo: '/general'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
