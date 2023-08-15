import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlErrorPopoverComponent } from './http-error-popover.component';

describe('HtmlErrorPopoverComponent', () => {
  let component: HtmlErrorPopoverComponent;
  let fixture: ComponentFixture<HtmlErrorPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlErrorPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlErrorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
