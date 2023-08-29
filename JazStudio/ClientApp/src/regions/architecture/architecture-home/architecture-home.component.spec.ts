import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureHomeComponent } from './architecture-home.component';

describe('ArchitectureHomeComponent', () => {
  let component: ArchitectureHomeComponent;
  let fixture: ComponentFixture<ArchitectureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectureHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
