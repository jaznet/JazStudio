import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSyncChartComponent } from './view-sync-chart.component';

describe('ViewSyncChartComponent', () => {
  let component: ViewSyncChartComponent;
  let fixture: ComponentFixture<ViewSyncChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSyncChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSyncChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
