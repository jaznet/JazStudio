import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-data-viz-home',
  templateUrl: './data-viz-home.component.html',
  styleUrls: ['./data-viz-home.component.css']
})
export class DataVizHomeComponent {
  @HostBinding('class') classes = 'fit-to-parent';
  constructor() { }
}
