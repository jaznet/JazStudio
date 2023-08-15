import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J3RadioButtonComponent } from './jz-radio-button.component';

describe('J3RadioButtonComponent', () => {
  let component: J3RadioButtonComponent;
  let fixture: ComponentFixture<J3RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J3RadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(J3RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
