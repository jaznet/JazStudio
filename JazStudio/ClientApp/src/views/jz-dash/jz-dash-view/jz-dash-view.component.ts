import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-jz-dash-view',
  templateUrl: './jz-dash-view.component.html',
  styleUrls: ['./jz-dash-view.component.css']
})
export class JzDashViewComponent {
  @HostBinding('class') classes = 'fit-to-parent';
}
