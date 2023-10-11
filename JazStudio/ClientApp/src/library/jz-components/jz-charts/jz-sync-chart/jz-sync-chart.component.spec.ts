import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzSyncChartComponent } from './jz-sync-chart.component';

describe('JzSyncChartComponent', () => {
  let component: JzSyncChartComponent;
  let fixture: ComponentFixture<JzSyncChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzSyncChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzSyncChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
