import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContactUsComponent } from './popup-contact-us.component';

describe('PopupContactUsComponent', () => {
  let component: PopupContactUsComponent;
  let fixture: ComponentFixture<PopupContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
