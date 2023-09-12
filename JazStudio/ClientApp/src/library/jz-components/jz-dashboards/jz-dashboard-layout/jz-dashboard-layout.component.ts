import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jz-dashboard-layout',
  templateUrl: './jz-dashboard-layout.component.html',
  styleUrls: ['./jz-dashboard-layout.component.css']
})
export class JzDashboardLayoutComponent implements OnInit {
  @HostBinding('class') classes = 'fit-to-parent grid-rows';
  constructor() { }

  ngOnInit(): void {
  }

}
