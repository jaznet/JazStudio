import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-jz-dashboard-view',
  templateUrl: './jz-dashboard-view.component.html',
  styleUrls: ['./jz-dashboard-view.component.css']
})
export class JzDashboardViewComponent {
  @HostBinding('class') classes = 'fit-to-parent';
}
