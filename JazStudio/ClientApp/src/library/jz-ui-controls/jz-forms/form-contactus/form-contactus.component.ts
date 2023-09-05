import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'form-contactus',
  templateUrl: './form-contactus.component.html',
  styleUrls: ['./form-contactus.component.css']
})
export class FormContactusComponent implements OnInit {

  @HostBinding('class') classes = 'fit-to-content';
  @ViewChild('formcontactus', { static: false }) formcontactus: ElementRef | any;

  public width: number = 100;
  public height: number = 100;

  constructor(private element: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.width = this.formcontactus.nativeElement.clientWidth;
    this.height = this.formcontactus.nativeElement.clientHeight;
  }

}
