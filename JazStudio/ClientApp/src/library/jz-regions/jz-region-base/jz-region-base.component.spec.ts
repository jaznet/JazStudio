import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzRegionBaseComponent } from './jz-region-base.component';

describe('JzRegionBaseComponent', () => {
  let component: JzRegionBaseComponent;
  let fixture: ComponentFixture<JzRegionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JzRegionBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzRegionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
