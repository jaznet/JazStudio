import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeMenuComponent } from './backoffice-menu.component';

describe('BackofficeMenuComponent', () => {
  let component: BackofficeMenuComponent;
  let fixture: ComponentFixture<BackofficeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackofficeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
