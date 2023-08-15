import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlErrorPopupComponent } from './html-error-popup.component';

describe('HtmlErrorPopupComponent', () => {
  let component: HtmlErrorPopupComponent;
  let fixture: ComponentFixture<HtmlErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlErrorPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
