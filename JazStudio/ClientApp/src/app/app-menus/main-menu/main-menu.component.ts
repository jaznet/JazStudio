
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2 } from '@angular/core';
import { MenuBaseComponent } from '../../jz-ui-controls/jz-menus/jz-menu-base/jz-menu-base.component';
import { MenuItemBaseComponent } from '../../jz-ui-controls/jz-menus/j3-menu-item-base/j3-menu-item-base.component';
import { AppEventsService } from '../../../services/app-services/app-events.service';
import { MenuEventsService } from '../../jz-ui-controls/jz-menus/jz-menu-events.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends MenuBaseComponent implements OnInit {

  @Input() view: string | any;
  @ContentChildren(MenuItemBaseComponent) menuItems: QueryList<MenuItemBaseComponent> | any;

  events: AppEventsService | undefined;

  constructor(
    appEvents: AppEventsService,
    renderer: Renderer2,
    menuEvents: MenuEventsService,
    changeDetector: ChangeDetectorRef) {
    super();
    this.menuName = 'menu-main';
    this.orientation = 'horizontal';
  }

  ngOnInit() {
    // this.menuName = 'Main Menu';
  }

}
