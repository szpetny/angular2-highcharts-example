/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailChart } from './detail-chart';
import { TestData } from '../testing/test-data';

describe('DetailChart', () => {
  it('should create an instance', () => {
    expect(new DetailChart(TestData.xchartData())).toBeTruthy();
  });

  it('should get options', () => {
    let detailChart = new DetailChart(TestData.xchartData());
    expect(detailChart.getOptions()).toBeDefined();
  });
});
