import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-backoffice-home',
  templateUrl: './backoffice-home.component.html',
  styleUrls: ['./backoffice-home.component.css']
})
export class BackofficeHomeComponent {
  @HostBinding('class') classes = 'fit-to-parent';
}
