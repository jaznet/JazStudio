import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J3ButtonComponent } from './jz-button.component';

describe('J3ButtonComponent', () => {
  let component: J3ButtonComponent;
  let fixture: ComponentFixture<J3ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J3ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(J3ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
