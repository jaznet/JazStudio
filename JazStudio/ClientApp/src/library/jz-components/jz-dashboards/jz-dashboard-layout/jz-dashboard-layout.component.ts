import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jz-dashboard-layout',
  templateUrl: './jz-dashboard-layout.component.html',
  styleUrls: ['./jz-dashboard-layout.component.css']
})
export class JzDashboardLayoutComponent implements OnInit {
  @HostBinding('class') classes = 'fit-to-parent grid-rows';
  @Input() rows: number = 2; // Default to 2 rows
  @Input() columns: number = 2; // Default to 2 columns
  constructor() { }

  ngOnInit(): void {
  }

}
