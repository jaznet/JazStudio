import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazStudioHome1Component } from './jaz-studio-home1.component';

describe('JazStudioHome1Component', () => {
  let component: JazStudioHome1Component;
  let fixture: ComponentFixture<JazStudioHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazStudioHome1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JazStudioHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
