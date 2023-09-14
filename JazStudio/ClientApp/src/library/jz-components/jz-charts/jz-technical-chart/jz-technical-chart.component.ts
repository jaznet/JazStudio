
import { Component } from '@angular/core';
import { TechanService } from './jz-technical-chart.service';

@Component({
  selector: 'jz-technical-chart',
  templateUrl: './jz-technical-chart.component.html',
  styleUrls: ['./jz-technical-chart.component.css']
})
export class JzTechnicalChartComponent {
  constructor(private techan: TechanService) { }

}
