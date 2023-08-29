import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureViewComponent } from './architecture-view.component';

describe('ArchitectureViewComponent', () => {
  let component: ArchitectureViewComponent;
  let fixture: ComponentFixture<ArchitectureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectureViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
