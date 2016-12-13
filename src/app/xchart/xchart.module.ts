import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule } from '@angular/http';

import { XchartComponent } from './xchart.component';
import { XchartRoutingModule } from './xchart-routing.module';
import { XchartService } from './xchart.service';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    XchartRoutingModule,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [XchartComponent],
  providers: [DataService, XchartService]
})
export class XchartModule { }
