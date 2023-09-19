import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalChartViewComponent } from './view-technical-chart.component';

describe('TechnicalChartViewComponent', () => {
  let component: TechnicalChartViewComponent;
  let fixture: ComponentFixture<TechnicalChartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalChartViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
