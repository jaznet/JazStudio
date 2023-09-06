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
export class JzMenuContainerComponent implements OnInit, AfterViewInit {

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
  menuEvents: MenuEventsService | any;
  menuContainer: HTMLDivElement | any;

  constructor(
    private appEvents: AppEventsService,
    private ele:ElementRef,
    private rendererFactory: RendererFactory2,
    menuEvents: MenuEventsService,
    private changeDetector: ChangeDetectorRef)
  {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.menuEvents = menuEvents;
  }

  ngOnInit() {
    //this.renderer.setStyle(this.ele, 'visibility', 'collapse');
  }

  ngAfterViewInit(): void {
    this.appEvents.viewSelectedEvent.subscribe((view:any) => {
      this.renderer.addClass(this.menuPanelRef.nativeElement, view);
    });

    this.menuEvents.menuItemSelectedEvent.subscribe((selectedItem: MenuItemBaseComponent) => {
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
      menuitem._tab.nativeElement.classList.remove('selected');
      menuitem._btn.selection('deselect');

      if (menuitem.menuItem === selectedItem.menuItem) {
        menuitem._btn.selection('select');
        menuitem._tab.nativeElement.classList.add('selected');
      
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
