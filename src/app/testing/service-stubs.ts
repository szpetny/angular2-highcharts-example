import { Observable } from 'rxjs/Rx';
import { TestData } from './test-data';

export class DataServiceStub {
  getXchartData(minx?, maxx?) {
    return Observable.of(TestData.xchartData());
  }
  
  getAladinDataFromJson(): Observable<any> {
    return Observable.of(TestData.moc);
  }
  
  getXtableDataFromJson(): Observable<Object> {
    return Observable.of(TestData.tableData);
  }
}

export class XchartServiceStub {
  updateDetailChartAndAddMasterPlotBand(detailChart, masterChartXAxis, min, max) {}
  updateDetailChartAndResetMasterPlotBand(detailChart, masterChartXAxis) {}
}
