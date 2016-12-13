import { Observable } from 'rxjs/Rx';
import { TestData } from './test-data';

export class DataServiceStub {
  getXchartData(minx?, maxx?) {
    return Observable.of(TestData.xchartData());
  }
}

export class XchartServiceStub {
  updateDetailChartAndAddMasterPlotBand(detailChart, masterChartXAxis, min, max) {}
  updateDetailChartAndResetMasterPlotBand(detailChart, masterChartXAxis) {}
}
