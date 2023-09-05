import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoroUSAComponent } from './choro-usa.component';

describe('ChoroUSAComponent', () => {
  let component: ChoroUSAComponent;
  let fixture: ComponentFixture<ChoroUSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoroUSAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoroUSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
