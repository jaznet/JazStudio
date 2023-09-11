import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jz-dashboard-container',
  templateUrl: './jz-dashboard-container.component.html',
  styleUrls: ['./jz-dashboard-container.component.css']
})
export class JzDashboardContainerComponent implements OnInit {
  @HostBinding('class') classes = 'fit-to-parent grid-rows';
  constructor() { }

  ngOnInit(): void {
  }

}
