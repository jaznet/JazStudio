import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzDashPanelComponent } from './jz-dashboard-panel.component';

describe('JzDashPanelComponent', () => {
  let component: JzDashPanelComponent;
  let fixture: ComponentFixture<JzDashPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzDashPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzDashPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
