import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactusComponent } from './form-contactus.component';

describe('FormContactusComponent', () => {
  let component: FormContactusComponent;
  let fixture: ComponentFixture<FormContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
