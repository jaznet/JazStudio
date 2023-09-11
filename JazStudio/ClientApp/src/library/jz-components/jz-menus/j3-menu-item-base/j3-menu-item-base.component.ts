import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { MenuEventsService } from '../jz-menu-events.service';
import { AppEventsService } from '../../../../services/app-services/app-events.service';
/*import { MenuEventsService } from '../j3-menu-events.service';*/

@Component({
  selector: 'j3-menu-item-base',
  templateUrl: './j3-menu-item-base.component.html',
  styleUrls: ['./j3-menu-item-base.component.css']
})
export class MenuItemBaseComponent implements OnInit, AfterViewInit {

  @Input() menuName: string = 'not set';
  @Input() menuItem: string = 'not set';
  @Input() state: string = 'not set';

  selected: boolean = false;
  menuItemType!: string;

  constructor(
    public appEventsService: AppEventsService,
    public menuService: MenuEventsService,
    private elementRef: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.menuName, this.menuItem);
  }

  menuItemSelected(): void {
    let t:HTMLDivElement = this.elementRef.nativeElement;
    t.classList.add('selected');
    this.selected = true;
   // console.log('%c Menu Item Selected', 'color:#A4A05B', this.menuItemType, this.menuName, this.menuItem);

    this.menuService.menuItemSelected(this);
  //  console.log(this);
  //   this.appEventsService.setPalette(this);
  }

  deSelect(tab:any) {
    this.menuService.deselectTab(tab);
  }

}
