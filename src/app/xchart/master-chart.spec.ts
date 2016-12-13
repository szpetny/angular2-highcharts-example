/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterChart } from './master-chart';
import { TestData } from '../testing/test-data';

describe('MasterChart', () => {
  it('should create an instance', () => {
    expect(new MasterChart(TestData.xchartData())).toBeTruthy();
  });

  it('should get options', () => {
    let detailChart = new MasterChart(TestData.xchartData());
    expect(detailChart.getOptions()).toBeDefined();
  });
});
