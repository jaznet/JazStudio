import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorodashComponent } from './chorodash.component';

describe('ChorodashComponent', () => {
  let component: ChorodashComponent;
  let fixture: ComponentFixture<ChorodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChorodashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChorodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
