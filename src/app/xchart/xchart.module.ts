import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule } from '@angular/http';

import { XchartComponent } from './xchart.component';
import { XchartRoutingModule } from './xchart-routing.module';
import { XchartService } from './xchart.service';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [
    ChartModule.forRoot(require('highcharts')),
    XchartRoutingModule,
    HttpModule
  ],
  declarations: [XchartComponent],
  providers: [DataService, XchartService],
  exports: [XchartComponent]
})
export class XchartModule { }
