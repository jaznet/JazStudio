import { EventEmitter, Injectable, Output } from '@angular/core';
import { MenuItemBaseComponent } from './j3-menu-item-base/j3-menu-item-base.component';

@Injectable({
  providedIn: 'root'
})
export class MenuEventsService {

  @Output() menuItemSelectedEvent = new EventEmitter<MenuItemBaseComponent>();
  @Output() menuItemDeselectedEvent = new EventEmitter<MenuItemBaseComponent>();

  constructor() { }

  menuItemSelected(selected: MenuItemBaseComponent) {
    this.menuItemSelectedEvent.emit(selected);
  }

  tabSelected() {

  }

  deselectTab(deselected: MenuItemBaseComponent) {
    this.menuItemSelectedEvent.emit(deselected);
  }
}
