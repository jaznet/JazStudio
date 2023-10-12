import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as techan from 'techan';

@Component({
  selector: 'app-jz-techan-chart',
  templateUrl: './jz-techan-chart.component.html',
  styleUrls: ['./jz-techan-chart.component.css']
})
export class JzTechanChartComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';

    ngOnInit(): void {
       
    }
    ngAfterViewInit(): void {
      //var techanTime = techan.scale.financetime().range([0, 100]);
    }

}
