export class MasterChart {
  private options = {
    chart: {
      reflow: false,
      borderWidth: 0,
      backgroundColor: null,
      marginLeft: 50,
      marginRight: 20,
      zoomType: 'x'
    },
    title: {
      text: null
    },
    xAxis: {
      minRange: this.data[0][this.data[0].length - 1][0],
      min: this.data[0][0][0],
      max: this.data[0][this.data[0].length - 1][0],
      plotBands: [{
        id: 'mask-before',
        from: this.data[0][0][0],
        to: this.data[0][this.data[0].length - 1][0],
        color: 'rgba(0, 0, 0, 0.2)'
      }]
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        enabled: false
      },
      title: {
        enabled: false
      },
      showFirstLabel: false
    },
    tooltip: {
      formatter: function() {
        return false;
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        fillColor: {
          linearGradient: [0, 0, 0, 70],
          stops: [
            [0, 'rgba(51,170,255,0)'],
            [1, 'rgba(255,255,255,0)']
          ]
        },
        lineWidth: 1,
        shadow: false,
        enableMouseTracking: false
      }
    },

    series: [{
      type: 'area',
      name: 'FLUX',
      pointStart: this.data[0][0][0],
      data: this.data[0]
    }, {
      name: 'ERROR',
      type: 'errorbar',
      visible: false,
      data: this.data[1],
      pointStart: this.data[0][0][0]
    }],

    exporting: {
      enabled: false
    }
  };

  constructor(private data: number[][][]) {
    this.data = data;
  }

  getOptions() {
    return this.options;
  }
}
