import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, OnInit, QueryList, Renderer2, RendererFactory2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { JzTabComponent } from '../../jz-buttons/jz-tab/jz-tab.component';
/*import { AppEventsService } from '../../../../app/components/app-services/app-events.service';*/
import { MenuEventsService } from '../jz-menu-events.service';
import { MenuItemBaseComponent } from '../j3-menu-item-base/j3-menu-item-base.component';
import { MenuTabPanelComponent } from '../j3-menu-tab-panel/j3-menu-tab-panel.component';
import { AppEventsService } from '../../../../services/app-services/app-events.service';

@Component({
  selector: 'jz-menu-container',
  templateUrl: './jz-menu-container.component.html',
  styleUrls: ['./jz-menu-container.component.css']
})
export class MenuContainerComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'menu-container';
  @ViewChild('menuPanel', { static: false }) menuPanelRef: ElementRef | any;
  @ViewChild('tabpanel', { static: false }) tabPanel: MenuTabPanelComponent | any;
  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any> | any;
  @ContentChildren(JzTabComponent) jztabs!: QueryList<JzTabComponent>;
  @ContentChildren(JzTabComponent, { descendants: true }) childComponents!: QueryList<JzTabComponent>;
  @ContentChildren(JzTabComponent, { descendants: true, read: ElementRef }) childElementRefs!: QueryList<ElementRef>;

  @Input() menuName: string | any;
  @Input() initialTemplate: TemplateRef<any> | any;
  @Input() orientation:  string='';
  @Input() menuType: string | any;

  private renderer: Renderer2;
  currentTemplate: TemplateRef<any> | any;
  //menuPanel: HTMLDivElement | any;
  menuEvents: MenuEventsService | any;
  menuContainer: HTMLDivElement | any;
  /*subscription: Subscription | any;*/

  constructor(
    private appEvents: AppEventsService,
    private rendererFactory: RendererFactory2,
    menuEvents: MenuEventsService,
    private changeDetector: ChangeDetectorRef)
  {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.menuEvents = menuEvents;
   // console.log(this.menuName);
  }

  ngOnInit() {
  //  console.log(this.menuName);
  }

  ngAfterViewInit(): void {

 //   console.log(this.menuName);

    this.appEvents.viewSelectedEvent.subscribe((view:any) => {
      this.renderer.addClass(this.menuPanelRef.nativeElement, view);
    });

    this.menuEvents.menuItemSelectedEvent.subscribe((selectedItem: MenuItemBaseComponent) => {
     // console.log('selectedItem: ', selectedItem.menuItem);
      this.onMenuItemSelected(selectedItem);
    });

    this.menuEvents.menuItemDeselectedEvent.subscribe((selectedItem: MenuItemBaseComponent) => {
      this.onMenuItemSelected(selectedItem);
    });

    this.currentTemplate = this.initialTemplate;
    this.changeDetector.detectChanges();
    if (this.tabPanel != undefined) {
    }
  }

  onMenuItemSelected(selectedItem: MenuItemBaseComponent) {

    if (selectedItem.menuName !== this.menuName) return;
    console.log('menu item',this.jztabs);
    this.jztabs.forEach((menuitem: JzTabComponent) => {
      //console.log('forEach TAB', menuitem);
      menuitem._tab.nativeElement.classList.remove('selected');
      menuitem._btn.selection('deselect');

      if (menuitem.menuItem === selectedItem.menuItem) {
        menuitem._tab.nativeElement.classList.add('selected');
        menuitem._btn.selection('select');
      }
    });

    console.groupEnd();
  }

  public SelectItem(tab: string) {
    this.tabPanel.forEach((menuitem: { item: string; }) => {
      if (tab === menuitem.item) {
        console.log(tab);
      }
    });
  }
}
