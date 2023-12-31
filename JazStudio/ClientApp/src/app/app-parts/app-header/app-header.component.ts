import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('mainMenuContainer') mainMenuContainer!: ElementRef;

  isLogoVisible: boolean= false;
  isMainMenuVisible: boolean = false;

  constructor(private app: AppService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.app.toggleMenuEvent.subscribe((menu: any) => {
      this.isLogoVisible = menu === 'show' ? true : false;
      this.isMainMenuVisible = menu === 'show' ? true : false;
    })
  }
}
