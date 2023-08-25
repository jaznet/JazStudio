
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { AppEventsService } from '../../../services/app-services/app-events.service';
import { MenuBaseComponent } from '../../../library/jz-ui-controls/jz-menus/jz-menu-base/jz-menu-base.component';
import { MenuItemBaseComponent } from '../../../library/jz-ui-controls/jz-menus/j3-menu-item-base/j3-menu-item-base.component';
import { MenuEventsService } from '../../../library/jz-ui-controls/jz-menus/jz-menu-events.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends MenuBaseComponent implements OnInit {

  @Input() view: string | any;
  @Input() visibility: string | any;
  @ViewChild('menuContainer') menuContainer!: ElementRef;
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
    console.log('1main menu', this.menuContainer)
  }

  ngOnInit() {
   console.log('2main menu',this.menuContainer)
  }

}
