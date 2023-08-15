import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlErrorPanelComponent } from './html-error-panel.component';

describe('HtmlErrorPanelComponent', () => {
  let component: HtmlErrorPanelComponent;
  let fixture: ComponentFixture<HtmlErrorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlErrorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlErrorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
