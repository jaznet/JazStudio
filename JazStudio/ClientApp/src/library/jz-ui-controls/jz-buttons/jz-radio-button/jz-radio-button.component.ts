import { AfterViewInit, ElementRef, HostBinding, Renderer2, ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular';
import { PaletteMgrService } from '../../../../services/app-services/palette-mgr.service';

@Component({
  selector: 'jz-radio-button',
  templateUrl: './jz-radio-button.component.html',
  styleUrls: ['./jz-radio-button.component.css']
})
export class JzRadioButtonComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'palette-menu-container';
  @Input() palette: string = 'onyx';
  @Input() iconColor: string = '#ffffff';
  @ViewChild('outercircle', { static: false }) outercircleRef: ElementRef | undefined;
  @ViewChild('innercircle', { static: false }) innercircleRef: ElementRef | undefined;
  @ViewChild('overlaycircle', { static: false }) overlaycircleRef: ElementRef | undefined;
  @ViewChild('tooltip', { static: false }) tooltip!: ElementRef;
  @ViewChild('svgPalette', { static: false }) svgPalette!: SVGSVGElement;
  @ViewChild('palettepopover', { static: false }) palettepopover!: DxPopoverComponent;

  innercircle!: SVGGElement;
  outercircle!: SVGGElement;
  overlaycircle!: SVGGElement;
  fill!: string;
  isPopupVisible: boolean = false;

  constructor(private appMgr: PaletteMgrService,
    private renderer: Renderer2) {  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.innercircle = this.innercircleRef?.nativeElement;
    this.outercircle = this.outercircleRef?.nativeElement;
    this.overlaycircle = this.overlaycircleRef?.nativeElement;
    this.fill = this.iconColor;
    this.renderer.setAttribute(this.innercircle, 'fill', this.fill);
  }

  setPalette() {
    console.log(this.palette);
    this.appMgr.ChangePalette(this.palette);
  }

  hover(action: string) {
    let y = this.outercircle;
    switch (action) {
      case 'enter':
       // this.renderer.setAttribute(this.outercircle, 'stroke', 'white');
        this.isPopupVisible = true;
        break;
      case 'leave':
       // this.renderer.setAttribute(this.outercircle, 'stroke', 'transparent');
       // this.isPopupVisible = false;
        break;
    }
    let x = this.outercircle;
  }

}
