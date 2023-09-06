import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDashComponent } from './sync-dash.component';

describe('SyncDashComponent', () => {
  let component: SyncDashComponent;
  let fixture: ComponentFixture<SyncDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
