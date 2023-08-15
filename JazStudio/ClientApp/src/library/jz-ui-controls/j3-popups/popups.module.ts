import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupContactUsComponent } from './popup-contact-us/popup-contact-us.component';
import { DxPopoverComponent, DxPopoverModule, DxPopupModule } from 'devextreme-angular';
import { PopupBaseComponent } from './popup-base/popup-base.component';
import { HtmlErrorPopupComponent } from './html-error-popup/html-error-popup.component';
import { HtmlErrorPanelComponent } from './html-error-panel/html-error-panel.component';
import { PopupsMgrComponent } from './popups-mgr/popups-mgr.component';
import { HttpErrorPopoverComponent } from './http-error-popover/http-error-popover.component';
import { LoadingPopoverComponent } from './loading-popover/loading-popover.component';
import { FormsModule } from '@angular/forms';
import { LibraryModule } from '../../../library.module';
import { ElapsedTimeComponent } from '../../../elapsed-time/elapsed-time.component';
import { SpinnerComponent } from '../../../spinner/spinner.component';


@NgModule({
  declarations: [
    PopupContactUsComponent,
    PopupBaseComponent,
    HtmlErrorPopupComponent,
    HttpErrorPopoverComponent,
    HtmlErrorPanelComponent,
    PopupsMgrComponent,
    LoadingPopoverComponent
  ],
  imports: [
    CommonModule,
    DxPopoverModule,
    DxPopupModule,
    FormsModule,
    LibraryModule
  ],
  exports: [
    PopupContactUsComponent,
    PopupBaseComponent,
    HtmlErrorPopupComponent,
    HttpErrorPopoverComponent,
    PopupsMgrComponent,
    LoadingPopoverComponent,
    ElapsedTimeComponent,
    DxPopoverComponent,
    SpinnerComponent
  ]
})
export class PopupsModule { }
