import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainAuxComponent } from './menu-main-aux.component';

describe('MenuMainAuxComponent', () => {
  let component: MenuMainAuxComponent;
  let fixture: ComponentFixture<MenuMainAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMainAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
