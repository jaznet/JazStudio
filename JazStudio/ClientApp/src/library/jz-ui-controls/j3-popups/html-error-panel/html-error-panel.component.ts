import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'html-error-panel',
  templateUrl: './html-error-panel.component.html',
  styleUrls: ['./html-error-panel.component.css']
})
export class HtmlErrorPanelComponent implements OnInit {

  message = 'an html error msg';

  constructor() { }

  ngOnInit(): void {
  }

}
