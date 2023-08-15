import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popups-mgr',
  templateUrl: './popups-mgr.component.html',
  styleUrls: ['./popups-mgr.component.css']
})
export class PopupsMgrComponent implements OnInit {

  isPopupVisible = true;

  constructor() { }

  ngOnInit(): void { }

}
