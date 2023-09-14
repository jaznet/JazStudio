import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzTechnicalChartComponent } from './jz-technical-chart.component';

describe('JzTechnicalChartComponent', () => {
  let component: JzTechnicalChartComponent;
  let fixture: ComponentFixture<JzTechnicalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzTechnicalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzTechnicalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
