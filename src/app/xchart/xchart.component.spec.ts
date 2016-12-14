/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { XchartComponent } from './xchart.component';
import { DataService } from '../shared/data.service';
import { XchartService } from './xchart.service';
import { MasterChart } from './master-chart';
import { DetailChart } from './detail-chart';
import { DataServiceStub } from '../testing/service-stubs';
import { XchartServiceStub } from '../testing/service-stubs';
import { TestData, MockChartEvent } from '../testing/test-data';
import { ChartModule } from 'angular2-highcharts';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { ActivatedRouteStub } from '../testing/router-stubs';

declare var require: any;
let Highcharts = require('highcharts/highcharts');
let HighchartsMore = require('highcharts/highcharts-more');
HighchartsMore(Highcharts);

describe('Component: Xchart', () => {
  let dataServiceStub, xchartServiceStub, data;
  let dataService, xchartService;
  let compDataService, compXchartService;

  let route;
  
  let comp: XchartComponent;
  let fixture: ComponentFixture<XchartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    dataServiceStub = new DataServiceStub();
    xchartServiceStub = new XchartServiceStub();
    route = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [XchartComponent],
      providers: [{ provide: DataService, useValue: dataServiceStub },
      { provide: XchartService, useValue: xchartServiceStub },
      { provide: ActivatedRoute, useValue: ActivatedRouteStub }]
    });

    fixture = TestBed.createComponent(XchartComponent);
    comp = fixture.componentInstance;

    dataService = fixture.debugElement.injector.get(DataService);
    compDataService = dataService;
    dataService = TestBed.get(DataService);

    data = Observable.of(TestData.xchartData());
    spyOn(compDataService, 'getXchartData').and.returnValue(data);

    xchartService = fixture.debugElement.injector.get(XchartService);
    compXchartService = xchartService;
    xchartService = TestBed.get(XchartService);

    de = fixture.debugElement.query(By.css('div#xchart-container'));
    el = de.nativeElement;
  }));

  it('should create an instance', () => {
    expect(de).not.toBeNull();
  });

  it('happens onMasterChartSelection and sets plot band', () => {
    let masterChartXAxis = TestData.chartXAxis();
    let chartXAxis = TestData.chartXAxis();
    chartXAxis.axis = masterChartXAxis;
    chartXAxis.setExtremes(0, 1);

    let event = new MockChartEvent();
    event.originalEvent.xAxis.push(chartXAxis);

    spyOn(compXchartService, 'updateDetailChartAndAddMasterPlotBand');

    let masterChartEl = fixture.debugElement.query(By.css('.master-chart'));
    masterChartEl.triggerEventHandler('selection', event);

    expect(compXchartService.updateDetailChartAndAddMasterPlotBand).toHaveBeenCalled();
  });

  it('happens onMasterChartSelection and resets plot band', () => {
    let masterChartXAxis = TestData.chartXAxis();

    let event = new MockChartEvent();
    event.originalEvent.xAxis = null;
    event.originalEvent.target.axes.push(masterChartXAxis);

    spyOn(compXchartService, 'updateDetailChartAndResetMasterPlotBand');

    let masterChartEl = fixture.debugElement.query(By.css('.master-chart'));
    masterChartEl.triggerEventHandler('selection', event);

    expect(compXchartService.updateDetailChartAndResetMasterPlotBand).toHaveBeenCalled();
  });

  it('happens onDetailChartSelection and sets the plot band', () => {
    let chartXAxis = TestData.chartXAxis();
    chartXAxis.setExtremes(0, 1);
    let event = new MockChartEvent();
    event.originalEvent.xAxis.push(chartXAxis);

    fixture.componentInstance.mczartDiv.chart = {axes: [chartXAxis]};
    spyOn(compXchartService, 'updateDetailChartAndAddMasterPlotBand');

    let detailChartEl = fixture.debugElement.query(By.css('.detail-chart'));
    detailChartEl.triggerEventHandler('selection', event);

    expect(compXchartService.updateDetailChartAndAddMasterPlotBand).toHaveBeenCalled();
  });

  it('happens onDetailChartSelection and resets the plot band', () => {
    let chartXAxis = TestData.chartXAxis();
    let event = new MockChartEvent();
    event.originalEvent.xAxis = null;
    event.originalEvent.target.axes.push(chartXAxis);
    
    fixture.componentInstance.mczartDiv.chart = {axes: [chartXAxis]};
    spyOn(compXchartService, 'updateDetailChartAndResetMasterPlotBand');

    let detailChartEl = fixture.debugElement.query(By.css('.detail-chart'));
    detailChartEl.triggerEventHandler('selection', event);

    expect(compXchartService.updateDetailChartAndResetMasterPlotBand).toHaveBeenCalled();
  });
});
