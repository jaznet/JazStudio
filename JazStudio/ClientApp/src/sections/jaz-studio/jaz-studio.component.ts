import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaz-studio',
  templateUrl: './jaz-studio.component.html',
  styleUrls: ['./jaz-studio.component.css']
})
export class JazStudioComponent implements OnInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor() { }

  ngOnInit(): void {
    console.log("JazStudio");
  }

}
