import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './main/home/home.module#HomeModule'
  },
  {
    path: 'reports',
    loadChildren: './main/reports/reports.module#ReportsModule'
  },
  {
    path: 'users',
    loadChildren: './main/users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
