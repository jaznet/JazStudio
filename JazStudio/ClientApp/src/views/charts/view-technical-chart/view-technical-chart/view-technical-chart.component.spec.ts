import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnicalChartComponent } from './view-technical-chart.component';

describe('ViewTechnicalChartComponent', () => {
  let component: ViewTechnicalChartComponent;
  let fixture: ComponentFixture<ViewTechnicalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTechnicalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTechnicalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
