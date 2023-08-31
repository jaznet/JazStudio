import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sandbox-home',
  templateUrl: './sandbox-home.component.html',
  styleUrls: ['./sandbox-home.component.css']
})
export class SandboxHomeComponent {
  @HostBinding('class') classes = 'fit-to-parent';
}
