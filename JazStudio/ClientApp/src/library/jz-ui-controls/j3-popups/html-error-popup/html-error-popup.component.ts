

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'html-error-popup',
  templateUrl: './html-error-popup.component.html',
  styleUrls: ['./html-error-popup.component.css']
})
export class HtmlErrorPopupComponent implements OnInit {

  isPopupVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
