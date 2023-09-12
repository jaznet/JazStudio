import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzDashComponent } from './jz-dashboard-view.component';

describe('JzDashComponent', () => {
  let component: JzDashComponent;
  let fixture: ComponentFixture<JzDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
