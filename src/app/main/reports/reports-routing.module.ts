import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Route[] = [
  {
    path: '',
    component: ReportsComponent,
    data: {
      title: 'Reports',
      icon: 'home'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ReportsRoutingModule {}
