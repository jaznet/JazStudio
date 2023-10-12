import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzTechanChartComponent } from './jz-techan-chart.component';

describe('JzTechanChartComponent', () => {
  let component: JzTechanChartComponent;
  let fixture: ComponentFixture<JzTechanChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzTechanChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzTechanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
