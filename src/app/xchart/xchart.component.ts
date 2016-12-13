import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { XchartService } from './xchart.service';
import { MasterChart } from './master-chart';
import { DetailChart } from './detail-chart';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { XformComponent } from '../xform/xform.component';

declare var require: any;
let Highcharts = require('highcharts/highcharts');
let HighchartsMore = require('highcharts/highcharts-more');
HighchartsMore(Highcharts);

@Component({
  selector: 'x-chart',
  templateUrl: './xchart.component.html',
  styleUrls: ['./xchart.component.css']
})
export class XchartComponent implements OnInit {
  @ViewChild('masterChart') mczartDiv: any;
  @ViewChild('detailChart') dczartDiv: any;
  @ViewChild('settingsForm') settingsDiv: any;

  masterChart: any;
  detailChart: any;
  masterOptions: any;
  detailOptions: any;
  serverport: string;
  filename: string;

  constructor(private dataService: DataService,
    private xchartService: XchartService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.serverport = params['serverport'];
        this.filename = params['filename'];
        return this.dataService.getXchartData(this.serverport, this.filename);
      })
      .subscribe((data: number[][][]) => {
        this.masterChart = new MasterChart(data);
        this.masterOptions = this.masterChart.getOptions();

        this.detailChart = new DetailChart(data);
        this.detailOptions = this.detailChart.getOptions();
      });
  }

  onMasterChartSelection(event) {
    let detailChart = this.dczartDiv.chart,
      masterChartXAxis;

    if (event.originalEvent.xAxis) {
      masterChartXAxis = event.originalEvent.xAxis[0].axis;

      let min = event.originalEvent.xAxis[0].min,
        max = event.originalEvent.xAxis[0].max;

      this.xchartService.updateDetailChartAndAddMasterPlotBand(this.serverport, this.filename,
        detailChart, masterChartXAxis, min, max);
    } else {
      masterChartXAxis = event.originalEvent.target.axes[0];
      this.xchartService.updateDetailChartAndResetMasterPlotBand(detailChart, masterChartXAxis);
    }
  }

  onDetailChartSelection(event) {
    let detailChart = this.dczartDiv.chart,
      masterChartXAxis = this.mczartDiv.chart.axes[0];

    if (event.originalEvent.xAxis) {

      let min = event.originalEvent.xAxis[0].min,
        max = event.originalEvent.xAxis[0].max;

      this.xchartService.updateDetailChartAndAddMasterPlotBand(this.serverport, this.filename,
        detailChart, masterChartXAxis, min, max);
    } else {
      this.xchartService.updateDetailChartAndResetMasterPlotBand(detailChart, masterChartXAxis);
    }
  }
}
