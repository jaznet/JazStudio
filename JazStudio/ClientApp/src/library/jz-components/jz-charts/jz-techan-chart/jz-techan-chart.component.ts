import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-jz-techan-chart',
  templateUrl: './jz-techan-chart.component.html',
  styleUrls: ['./jz-techan-chart.component.css']
})
export class JzTechanChartComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }

}
