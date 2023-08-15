import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular';

@Component({
  selector: 'popup-base',
  templateUrl: './popup-base.component.html',
  styleUrls: ['./popup-base.component.css']
})
export class PopupBaseComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() initialTemplate: TemplateRef<any> | any;
  @Input() panelId: string = 'not set';
  @Input() title: string = 'not set';
  @ViewChild('dxpopover', { static: false }) dxpopover: DxPopoverComponent | any;

  currentTemplate: TemplateRef<any> | any;
  isPopupVisible = false;
  popoverTitle = 'no title';
  popoverClass = 'noclass';
  popupname: string = 'default';

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.popoverTitle = this.title;
    this.dxpopover.target = this.panelId;
    this.dxpopover.class = 'xxxx';

    console.log(this.dxpopover);

    this.currentTemplate = this.initialTemplate;
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
