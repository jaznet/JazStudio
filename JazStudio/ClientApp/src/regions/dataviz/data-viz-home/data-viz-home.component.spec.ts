import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVizHomeComponent } from './data-viz-home.component';

describe('DataVizHomeComponent', () => {
  let component: DataVizHomeComponent;
  let fixture: ComponentFixture<DataVizHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVizHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataVizHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
