
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MenuBaseComponent } from '../../jz-ui-controls/jz-menus/jz-menu-base/jz-menu-base.component';
import { AppEventsService } from '../../../services/app-services/app-events.service';
import { MenuEventsService } from '../../jz-ui-controls/jz-menus/jz-menu-events.service';

@Component({
  selector: 'menu-main-aux',
  templateUrl: './menu-main-aux.component.html',
  styleUrls: ['./menu-main-aux.component.css']
})
export class MenuMainAuxComponent extends MenuBaseComponent implements OnInit {

  constructor(
    appEvents: AppEventsService,
    renderer: Renderer2,
    menuEvents: MenuEventsService,
    changeDetector: ChangeDetectorRef) {
    super();
    this.menuName = 'menu-main-aux';
    this.orientation = 'horizontal';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
