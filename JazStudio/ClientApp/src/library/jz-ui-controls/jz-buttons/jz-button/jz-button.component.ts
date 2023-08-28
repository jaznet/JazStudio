import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'jz-button',
  templateUrl: './jz-button.component.html',
  styleUrls: ['./jz-button.component.css']
})
export class JzButtonComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-content j3Button';
  @Input() menuType: string = 'menu';
  @Input() text: string = 'txt';
  @Input() colorTxt: string = 'var(--jz-palette-color-5)';
  @Input() colorBkg: string = 'var(--jz-palette-color-1)';
  @Input() fontSize: string = '13px';
  btnTxt = 'j3';
  @Input() height: string = '32px';
  @Input() width: string = '100px';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) { }
 
  ngOnInit(): void {}

  ngAfterViewInit(): void {
   // console.log(this.menuType);
    this.renderer.addClass(this.element.nativeElement, this.menuType);
    let c: HTMLDivElement = this.element.nativeElement;
    //this.render.setStyle(this.element, 'height', this.height);
    //this.render.setStyle(this.element, 'width', this.width);
  }

  selection(select: string) {
    switch (select) {
      case 'select': {
        this.renderer.addClass(this.element.nativeElement.firstChild, 'selected');
        break;
      }
      case 'deselect': {
        this.renderer.removeClass(this.element.nativeElement.firstChild, 'selected');
        break;
      }
    }

  }

  login(): any {
    return null;
  }
}
