import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { PaletteMgrService } from './palette-mgr.service';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {

  @Output() setPaletteEvent = new EventEmitter<{ menu: string; item: string }>();
  @Output() popEvent = new EventEmitter();
  @Output() viewSelectedEvent = new EventEmitter();

  constructor(private appMgr: PaletteMgrService) { }

  setPalette(menu: string, item?: string) {
    this.appMgr.ChangePalette('indigo');
  //  this.setPaletteEvent.emit({ menu: menu, item: item='' });
  }

  ShowPopup(popup: string) {
    this.popEvent.emit(popup)
  }

  SelectView(view: string) {
    this.viewSelectedEvent.emit(view);
  }

}
