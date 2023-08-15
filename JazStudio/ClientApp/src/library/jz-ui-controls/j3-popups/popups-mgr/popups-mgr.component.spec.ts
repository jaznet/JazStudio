import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsMgrComponent } from './popups-mgr.component';

describe('PopupsMgrComponent', () => {
  let component: PopupsMgrComponent;
  let fixture: ComponentFixture<PopupsMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupsMgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
