import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeViewComponent } from './backoffice-view.component';

describe('BackofficeViewComponent', () => {
  let component: BackofficeViewComponent;
  let fixture: ComponentFixture<BackofficeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackofficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
