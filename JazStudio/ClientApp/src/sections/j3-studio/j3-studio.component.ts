import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-j3-studio',
  templateUrl: './j3-studio.component.html',
  styleUrls: ['./j3-studio.component.css']
})
export class J3StudioComponent implements OnInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor() { }

  ngOnInit(): void {
  }

}
