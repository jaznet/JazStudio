import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jz-dashboard-panel',
  templateUrl: './jz-dashboard-panel.component.html',
  styleUrls: ['./jz-dashboard-panel.component.css']
})
export class JzDashboardPanelComponent {
  @HostBinding('class') classes = 'fit-to-parent grid-row';
  @Input() header: string = 'Panel Header'; // Input for the header content

  constructor() {

  }

}
