export class DetailChart {
  private dataStart: number;

  private options = {
    chart: {
      marginBottom: 120,
      reflow: false,
      marginLeft: 50,
      marginRight: 20,
      style: {
        position: 'absolute'
      },
      zoomType: 'x'
    },
    yAxis: {
      tickAmount: 5,
      title: {
        enabled: false
      },
      labels: {
        formatter: function() {
          return this.value;
        },
        rotation: 45,
        style: {
          fontSize: '8px'
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'THE CZART'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'FLUX',
      type: 'spline',
      data: this.data[0],
      pointStart: this.dataStart,
      color: 'rgb(0,0,0)'
    }, {
      name: 'ERROR',
      type: 'errorbar',
      data: this.data[1],
      pointStart: this.dataStart,
      color: 'rgb(124,181,236)'
    }],
    tooltip: {
      enabled: false,
      shared: false
    },
    exporting: {
      enabled: false
    }
  };

  constructor(private data: number[][][]) {
    this.data = data;
    this.dataStart = data[0][0][0];
  }

  getOptions() {
    return this.options;
  }
}
