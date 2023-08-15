import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular/ui/popover';

@Component({
  selector: 'http-error-popover',
  templateUrl: './http-error-popover.component.html',
  styleUrls: ['./http-error-popover.component.css']
})
export class HttpErrorPopoverComponent implements OnInit, AfterViewInit {

  @ViewChild('httperrorpopover', { static: false }) httperrorpopover: DxPopoverComponent | any;
  @Input() target: string = 'y';
  @Input() panelId: string = '';
  @Input() initialTemplate: any;
  currentTemplate: any;
  isPopupVisible = false;
  name = 'name';
  public message = "you've got mail";
  error: any;
  ok: boolean | undefined;
  headers: HttpHeaders | undefined;
  status = 'status';                                      
  statusText = 'statusText';
  baseUrl = 'base url';
  url = 'geturl';
  type = "type";

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const c = this.httperrorpopover;
    this.httperrorpopover.target = this.target;
    this.currentTemplate = this.initialTemplate;
   
  //  this.httperrorpopover.target = '#' + this.target;
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
