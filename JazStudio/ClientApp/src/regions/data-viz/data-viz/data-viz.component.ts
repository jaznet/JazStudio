import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-viz',
  templateUrl: './data-viz.component.html',
  styleUrls: ['./data-viz.component.css']
})
export class DataVizComponent implements OnInit {
  @HostBinding('class') classes = 'fit-to-parent';

  constructor() { }

  ngOnInit(): void {
    console.log("DataVizComponent");
  }

}
