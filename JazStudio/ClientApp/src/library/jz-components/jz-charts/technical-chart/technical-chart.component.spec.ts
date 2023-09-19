import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalChartComponent } from './technical-chart.component';

describe('TechnicalChartComponent', () => {
  let component: TechnicalChartComponent;
  let fixture: ComponentFixture<TechnicalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
