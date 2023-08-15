import { ViewEncapsulation } from '@angular/compiler';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, HostBinding, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MenuEventsService } from '../../jz-menus/jz-menu-events.service';
import { MenuItemBaseComponent } from '../../jz-menus/j3-menu-item-base/j3-menu-item-base.component';
import { JzButtonComponent } from '../jz-button/jz-button.component';
import { AppEventsService } from '../../../../services/app-services/app-events.service';

@Component({
  selector: 'jz-tab',
  templateUrl: './jz-tab.component.html',
  styleUrls: ['./jz-tab.component.css']
})
export class JzTabComponent extends MenuItemBaseComponent implements OnInit, AfterViewInit {

  /*@HostBinding('class') classes = 'tab';*/
  @Input() route = "";
//  @Input() btn: J3ButtonComponent | undefined;
  @Input() btnTxt = "Tab Button";
  @Input() initialTemplate: TemplateRef<any> | any;
  @Input() orientation: string = '';
  @Input() menuName: string = '';
  @Input() state: string = '';
  @Input() tabBorder!: HTMLDivElement;
  @Input() menuType: string='notset';

  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any> | any;
  @ViewChild('tabBorder', { static: false }) tabBorderRef: ElementRef | any;
  @ViewChild('tabButton', { static: false }) tabButtonRef: ElementRef | any;

  currentTemplate: TemplateRef<any> | any;
  _elementRef;
  _type: string = 'set not';
  _jzTab: JzTabComponent;
  _orientation: string;
  tabRoute = 'home';
  _tab!: any;
  _btn!: JzButtonComponent;
  button!: HTMLDivElement
  orient = 'v';


  menuItem = 'login';
  
  constructor(
    menuService: MenuEventsService,
    appService: AppEventsService,
    elementRef: ElementRef,
    renderer: Renderer2
  )
  {
    super(appService, menuService, elementRef);
    this._elementRef = elementRef;
    this._jzTab = this._elementRef.nativeElement;
    this._orientation = this.orientation;
   
  }
    
  ngOnInit(): void { }

  ngAfterViewInit(): void {
   // console.log(this.menuType);
   // console.log('JZTAB: ' + this.btnTxt + ' :  ' + this.orientation);
   // this._btn = this.btn;
    this._tab = this.tabBorderRef;
    this._btn = this.tabButtonRef;

    switch (this.orientation) {
      case 'horizontal':
        this._tab.nativeElement.classList.add('horizontal');
        break;
      case 'vertical':
        this._tab.nativeElement.classList.add('vertical');
        break;
    }

    //this._elementRef.nativeElement.classList.add('jztab');
    //if (this.orientation === 'vertical') {
    //  this._elementRef.nativeElement.classList.add('vertical');
    //} else if (this.orientation === 'horizontal') {
    //  this._elementRef.nativeElement.classList.add('vertical');
    //}
  
   
  //  this.button = this.tabButtonRef.background;

    if (this.state === 'selected') {
     // this.button.classList.add('selected');
    //  console.log(this.state);
    }

  }

  tabSelected() {
  
    this.menuService.menuItemSelected(this);
    console.log('tab ',this.route);
  }


}
