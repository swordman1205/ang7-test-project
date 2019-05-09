import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared';
import { HomeDatatableComponent } from './datatable';
import { HomeChartComponent } from './chart';

@NgModule({
  declarations: [
    HomeComponent,
    HomeDatatableComponent,
    HomeChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
