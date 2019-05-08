import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Users',
      icon: 'user'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}
