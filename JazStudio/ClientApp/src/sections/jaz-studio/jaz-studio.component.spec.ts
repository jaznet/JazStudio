import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J3FrameworkComponent } from './jaz-studio.component';

describe('J3FrameworkComponent', () => {
  let component: J3FrameworkComponent;
  let fixture: ComponentFixture<J3FrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J3FrameworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(J3FrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
