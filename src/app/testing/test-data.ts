export class TestData {
  static data: number[][][] = [[[5505.10595703125, 2.568939931723846E-19]],
  [[9686.919921875, -3.360039908234288E-18, -3.360039908234288E-18]]];

  static xchartData(): number[][][] {
    return this.data;
  }

  static dataAsPoints(data): MockPoint[] {
    if (data[0].length === 2) {
      return [new MockPoint(data[0][0], data[0][1])];
    } else {
      return [new MockPoint(data[0][0], null, data[0][1], data[0][2])];
    }
  }

  static points(): MockPoint[][] {
    return [[new MockPoint(this.data[0][0][0], this.data[0][0][1])],
    [new MockPoint(this.data[1][0][0], null, this.data[1][0][1], this.data[1][0][2])]];
  }

  static detailChart() {
    return new MockDetailChart();
  }

  static chartXAxis() {
    return new MockAxis();
  }

}

export class MockDetailChart {
  series: MockSeries[];
  axes: MockAxis[];

  constructor() {
    this.axes = [new MockAxis()];
    this.series = [new MockSeries(), new MockSeries()];
    this.series[0].setData(TestData.xchartData()[0]);
    this.series[1].setData(TestData.xchartData()[1]);
  }
}

export class MockSeries {
  data: MockPoint[];
  setData(data) {
    this.data = TestData.dataAsPoints(data);
  }
}

export class MockAxis {
  min: number;
  max: number;
  series: MockSeries[];
  axis: MockAxis;

  constructor() {
    this.series = [new MockSeries(), new MockSeries()];
    this.series[0].setData(TestData.xchartData()[0]);
    this.series[1].setData(TestData.xchartData()[1]);
  }

  setExtremes(min, max) {
    this.min = min;
    this.max = max;
  }
  removePlotBand(name) { }
  addPlotBand(settings) { }
}

export class MockPoint {
  x: number;
  y: number;
  low: number;
  high: number;

  constructor(x, y, low?, high?) {
    this.x = x;
    this.y = y;
    this.low = low;
    this.high = high;
  }
}

export class MockChartEvent {
  originalEvent: any;

  constructor() {
    this.originalEvent = {
      xAxis: new Array<MockAxis>(),
      target: {
        axes: new Array<MockAxis>()
      }
    };
  }
}
