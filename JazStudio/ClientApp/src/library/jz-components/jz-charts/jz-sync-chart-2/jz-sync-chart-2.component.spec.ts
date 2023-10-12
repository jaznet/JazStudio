import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzSyncChart2Component } from './jz-sync-chart-2.component';

describe('JzSyncChart2Component', () => {
  let component: JzSyncChart2Component;
  let fixture: ComponentFixture<JzSyncChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzSyncChart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzSyncChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
