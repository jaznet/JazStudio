import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { FormContactusComponent } from '../../../../forms/form-contactus/form-contactus.component';
import { PopupBaseComponent } from '../popup-base/popup-base.component';

@Component({
  selector: 'popup-contact-us',
  templateUrl: './popup-contact-us.component.html',
  styleUrls: ['./popup-contact-us.component.css']
})
export class PopupContactUsComponent extends PopupBaseComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('dxpopup', { static: false }) dxpopup: DxPopupComponent | any;
  @ViewChild(FormContactusComponent, { static: false }) formsRef: FormContactusComponent | any;

  isContactPopupVisible = false;
  form: any;

  constructor(changeDetector: ChangeDetectorRef) {
    super(changeDetector);
    this.popupname = 'contactus';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.form = this.formsRef;
    this.dxpopup.height = this.formsRef.height + 96;
    this.dxpopup.width = this.formsRef.width + 96;
  }

  ngAfterContentInit(): void {
    this.form = this.formsRef;
  }

}
