import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SidebarComponent,
  NavbarComponent,
  BreadcrumbComponent
} from './components';
import { throwIfAlreadyLoaded } from './module-loaded';
import { RouterModule } from '@angular/router';

const components = [
  SidebarComponent,
  NavbarComponent,
  BreadcrumbComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    }
  }
}
