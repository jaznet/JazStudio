import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazStudioHomeComponent } from './jaz-studio-home.component';

describe('JazStudioHomeComponent', () => {
  let component: JazStudioHomeComponent;
  let fixture: ComponentFixture<JazStudioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazStudioHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JazStudioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
