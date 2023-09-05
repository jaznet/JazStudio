import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzPopupBaseComponent } from './jz-popup-base.component';

describe('JzPopupBaseComponent', () => {
  let component: JzPopupBaseComponent;
  let fixture: ComponentFixture<JzPopupBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzPopupBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzPopupBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
