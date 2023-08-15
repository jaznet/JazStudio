import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jz-menu-base',
  templateUrl: './jz-menu-base.component.html',
  styleUrls: ['./jz-menu-base.component.css']
})
export class MenuBaseComponent implements OnInit {

  orientation: string = 'default';
  menuName: string = 'base';

  constructor() { }

  ngOnInit(): void {
   
  }

}
