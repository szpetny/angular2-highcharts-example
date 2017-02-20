import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class XchartService {
  constructor(private dataService: DataService) { }

  updateDetailChartAndAddMasterPlotBand(serverport, filename,
    detailChart, masterChartXAxis, min, max) {
    let details: Observable<number[][][]> = this.dataService.getXchartData(serverport, filename,
      min, max);

    details.subscribe(data => {
      masterChartXAxis.removePlotBand('mask-before');
      masterChartXAxis.addPlotBand({
        id: 'mask-before',
        from: masterChartXAxis.series[0].data[0].x,
        to: min,
        color: 'rgba(0, 0, 0, 0.2)'
      });

      masterChartXAxis.removePlotBand('mask-after');
      masterChartXAxis.addPlotBand({
        id: 'mask-after',
        from: max,
        to: masterChartXAxis.series[0].data[masterChartXAxis.series[0].data.length - 1].x,
        color: 'rgba(0, 0, 0, 0.2)'
      });

      this.updateDetailChart(detailChart, data, min, max);
    });
  }

  updateDetailChartAndResetMasterPlotBand(detailChart, masterChartXAxis) {
      masterChartXAxis.removePlotBand('mask-before');
      masterChartXAxis.removePlotBand('mask-after');
      masterChartXAxis.addPlotBand({
        id: 'mask-before',
        from: masterChartXAxis.series[0].data[0].x,
        to: masterChartXAxis.series[0].data[masterChartXAxis.series[0].data.length - 1].x,
        color: 'rgba(0, 0, 0, 0.2)'
      });

      let detailData = [],
          detailErrorData = [];

      for (let point of masterChartXAxis.series[0].data) {
        detailData.push([point.x, point.y]);
      }

      for (let point of masterChartXAxis.series[1].data) {
        detailErrorData.push([point.x, point.low, point.high]);
      }

      this.updateDetailChart(detailChart, [detailData, detailErrorData], null, null);
  }

  private updateDetailChart(chart, data, min, max) {
    chart.series[0].setData(data[0]);
    chart.series[1].setData(data[1]);
    chart.axes[0].setExtremes(min, max);
  }
}
