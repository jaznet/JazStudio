import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureMenuComponent } from './architecture-menu.component';

describe('ArchitectureMenuComponent', () => {
  let component: ArchitectureMenuComponent;
  let fixture: ComponentFixture<ArchitectureMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectureMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectureMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
