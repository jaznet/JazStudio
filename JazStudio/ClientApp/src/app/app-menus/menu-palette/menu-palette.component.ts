
import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
/*import { PaletteMgrService } from '../../app-parts/app-services/palette-mgr.service';*/
import { DxPopoverComponent } from 'devextreme-angular';
import { PaletteMgrService } from '../../../services/app-services/palette-mgr.service';
import { JzRadioButtonComponent } from '../../../library/jz-ui-controls/jz-buttons/jz-radio-button/jz-radio-button.component';

@Component({
  selector: 'menu-palette',
  templateUrl: './menu-palette.component.html',
  styleUrls: ['./menu-palette.component.css']
})
export class MenuPaletteComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'fit-to-content jaz';
  @ViewChild('', { static: false }) palettepopover!: DxPopoverComponent;
  @ViewChildren(JzRadioButtonComponent) radioButtons!: QueryList<JzRadioButtonComponent>;

  color: string = '';
  selectedPalette: string = 'gold';
  isPopupVisible: boolean = true;

  constructor(private appMgr: PaletteMgrService, private renderer: Renderer2, private changeDetector: ChangeDetectorRef) {

    this.appMgr.paletteChangedEvent.subscribe(palette => {
      this.selectedPalette = palette;
      this.radioButtons.forEach((button: JzRadioButtonComponent) => {
        if (this.selectedPalette == button.palette) {
          let outer = button.outercircle;
         // console.log('button', button.outercircle);
          this.renderer.setAttribute(button.outercircle, 'stroke', 'var(--jz-palette-color-2)');
        }
        else {
          this.renderer.setAttribute(button.outercircle, 'stroke', 'transparent');
        }
      });
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.radioButtons.forEach((button: JzRadioButtonComponent) => {
     // this.renderer.addClass(button.classes, 'jaz');
     // console.log(button);
    })
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  setPalette(palette: string) {
    this.selectedPalette = palette;
    this.appMgr.ChangePalette(palette);
  }

}
