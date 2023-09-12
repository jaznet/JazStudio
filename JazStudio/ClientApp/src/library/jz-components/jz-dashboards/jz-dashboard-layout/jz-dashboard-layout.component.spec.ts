import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzDashContainerComponent } from './jz-dashboard-layout.component';

describe('JzDashContainerComponent', () => {
  let component: JzDashContainerComponent;
  let fixture: ComponentFixture<JzDashContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzDashContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzDashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
