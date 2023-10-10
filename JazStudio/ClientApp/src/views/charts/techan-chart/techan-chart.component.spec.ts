import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechanChartComponent } from './techan-chart.component';

describe('TechanChartComponent', () => {
  let component: TechanChartComponent;
  let fixture: ComponentFixture<TechanChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechanChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
