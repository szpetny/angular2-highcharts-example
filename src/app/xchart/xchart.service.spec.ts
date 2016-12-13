/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { XchartService } from './xchart.service';
import { DataService } from '../shared/data.service';
import { TestData } from '../testing/test-data';
import { DataServiceStub } from '../testing/service-stubs';

describe('Service: Xchart', () => {
  let dataServiceStub, detailChartMock, masterChartXAxisMock,
      serverport = 'servername:8080',
      filename = 'some.filename',
      min = 1, max = 2, data;

  beforeEach(() => {
    dataServiceStub = new DataServiceStub();
    detailChartMock = TestData.detailChart();
    masterChartXAxisMock = TestData.chartXAxis();
    data = Observable.of(TestData.xchartData());
    TestBed.configureTestingModule({
      providers: [{provide: DataService, useValue: dataServiceStub }, XchartService]
    });
  });

  it('updateDetailChartAndAddMasterPlotBand', inject([XchartService], (service: XchartService) => {
    spyOn(dataServiceStub, 'getXchartData').and.returnValue(data);
    spyOn(masterChartXAxisMock, 'removePlotBand');
    spyOn(masterChartXAxisMock, 'addPlotBand');
    
    service.updateDetailChartAndAddMasterPlotBand(serverport, filename,
      detailChartMock, masterChartXAxisMock, min, max);
    
    expect(dataServiceStub.getXchartData).toHaveBeenCalledWith(min, max);
    expect(masterChartXAxisMock.removePlotBand).toHaveBeenCalledWith('mask-before');
    expect(masterChartXAxisMock.addPlotBand).toHaveBeenCalledWith({id: 'mask-before', from: 5505.10595703125, 
      to: min, color: 'rgba(0, 0, 0, 0.2)'});
    expect(masterChartXAxisMock.removePlotBand).toHaveBeenCalledWith('mask-after');
    expect(masterChartXAxisMock.addPlotBand).toHaveBeenCalledWith({id: 'mask-after', from: max, 
      to: 5505.10595703125, color: 'rgba(0, 0, 0, 0.2)'});
    expect(detailChartMock.series[0].data).toEqual(TestData.points()[0]);
    expect(detailChartMock.series[1].data).toEqual(TestData.points()[1]);
    expect(detailChartMock.axes[0].min).toEqual(1);
    expect(detailChartMock.axes[0].max).toEqual(2);
  }));
  
  it('updateDetailChartAndResetMasterPlotBand', inject([XchartService], (service: XchartService) => {
    spyOn(masterChartXAxisMock, 'removePlotBand');
    spyOn(masterChartXAxisMock, 'addPlotBand');
    
    service.updateDetailChartAndResetMasterPlotBand(detailChartMock, masterChartXAxisMock);
    
    expect(masterChartXAxisMock.removePlotBand).toHaveBeenCalledWith('mask-before');
    expect(masterChartXAxisMock.removePlotBand).toHaveBeenCalledWith('mask-after');
    expect(masterChartXAxisMock.addPlotBand).toHaveBeenCalledWith({id: 'mask-before', from: 5505.10595703125, 
      to: 5505.10595703125, color: 'rgba(0, 0, 0, 0.2)'});
    expect(detailChartMock.series[0].data).toEqual(TestData.points()[0]);
    expect(detailChartMock.series[1].data).toEqual(TestData.points()[1]);
    expect(detailChartMock.axes[0].min).toBeNull();
    expect(detailChartMock.axes[0].max).toBeNull();
  }));
});
