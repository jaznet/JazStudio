import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  @ViewChild('appFooter', { static: false }) appFooterRef: ElementRef | any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  setClass(view: string) {
    this.renderer.addClass(this.appFooterRef.nativeElement, view);
  }

}
