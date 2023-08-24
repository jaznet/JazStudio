import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  constructor(private app: AppService) {
    this.app.toggleMenuEvent.subscribe((menu: any) => {
      console.log('gotcha', menu);
    })
  }
}
