import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzLogoComponent } from './jz-logo.component';

describe('JzLogoComponent', () => {
  let component: JzLogoComponent;
  let fixture: ComponentFixture<JzLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
