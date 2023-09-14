import { TestBed } from '@angular/core/testing';

import { JzTechnicalChartService } from './jz-technical-chart.service';

describe('JzTechnicalChartService', () => {
  let service: JzTechnicalChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JzTechnicalChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
