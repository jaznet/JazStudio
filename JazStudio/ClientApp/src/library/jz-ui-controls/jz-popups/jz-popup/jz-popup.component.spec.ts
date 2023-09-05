import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzPopupComponent } from './jz-popup.component';

describe('JzPopupComponent', () => {
  let component: JzPopupComponent;
  let fixture: ComponentFixture<JzPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
