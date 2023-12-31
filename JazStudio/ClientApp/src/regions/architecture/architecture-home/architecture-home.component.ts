import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-architecture-home',
  templateUrl: './architecture-home.component.html',
  styleUrls: ['./architecture-home.component.css']
})
export class ArchitectureHomeComponent {
  @HostBinding('class') classes = 'fit-to-parent';
}
