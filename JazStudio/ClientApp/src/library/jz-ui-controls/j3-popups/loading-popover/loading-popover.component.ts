import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular';

@Component({
  selector: 'loading-popover',
  templateUrl: './loading-popover.component.html',
  styleUrls: ['./loading-popover.component.css']
})
export class LoadingPopoverComponent implements OnInit, AfterViewInit, AfterViewChecked {                                                           

  @Input() target: string='z';
  @ViewChild('loadingpopover', { static: false }) loadingpopover: DxPopoverComponent | any;
  isPopupVisible = false;
  message: string = 'none';
  url:string='must set;'

  constructor(private changeDetector: ChangeDetectorRef) { }   

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadingpopover.target = this.target;
    this.changeDetector.detectChanges();
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
