import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncChart2Component } from './sync-chart2.component';

describe('SyncChart2Component', () => {
  let component: SyncChart2Component;
  let fixture: ComponentFixture<SyncChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncChart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
