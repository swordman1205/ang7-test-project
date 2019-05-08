import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './components';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    CommonModule,
    NgxChartsModule,
    WidgetComponent
  ]
})
export class SharedModule { }
