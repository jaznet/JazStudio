import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaletteComponent } from './menu-palette.component';

describe('MenuPaletteComponent', () => {
  let component: MenuPaletteComponent;
  let fixture: ComponentFixture<MenuPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
