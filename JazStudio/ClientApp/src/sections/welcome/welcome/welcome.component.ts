import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'fit-to-parent';
  @ViewChild('C1', { static: false }) C1Ref: ElementRef | undefined;
  @ViewChild('B2', { static: false }) B2Ref: ElementRef | undefined;
  @ViewChild('globeContainer', { static: false }) globeContainerRef: ElementRef | undefined;

  c1: HTMLDivElement | undefined;
  b2: HTMLDivElement | undefined;

  state: string = 'selected';
  orientation = 'horizontal';
  menuItem = 'logon';
  route = 'home';
  btnTxt = 'Login';

  constructor(
    private router: Router,
    private app: AppService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.c1 = this.C1Ref?.nativeElement;
    this.b2 = this.B2Ref?.nativeElement;
    //this.app.hideMenu();
  }

  login() {
    console.log('login');
    let r = this.router.getCurrentNavigation();
    //  this.app.showMenu();
    this.router.navigateByUrl('/home')
  }

}
