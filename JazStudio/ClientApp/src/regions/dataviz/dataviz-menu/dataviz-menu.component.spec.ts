import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVizMenuComponent } from './dataviz-menu.component';

describe('DataVizMenuComponent', () => {
  let component: DataVizMenuComponent;
  let fixture: ComponentFixture<DataVizMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVizMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataVizMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
