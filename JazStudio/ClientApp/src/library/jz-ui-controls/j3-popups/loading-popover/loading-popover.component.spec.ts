import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPopoverComponent } from './loading-popover.component';

describe('LoadingPopoverComponent', () => {
  let component: LoadingPopoverComponent;
  let fixture: ComponentFixture<LoadingPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
