import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaz-studio',
  templateUrl: './jaz-studio-view.component.html',
  styleUrls: ['./jaz-studio-view.component.css']
})
export class JazStudioViewComponent implements OnInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor() { }

  ngOnInit(): void {
    console.log("JazStudio");
  }

}
