import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @HostBinding('class') classes = 'centered';

  constructor() { }

  ngOnInit(): void {
  }

}
