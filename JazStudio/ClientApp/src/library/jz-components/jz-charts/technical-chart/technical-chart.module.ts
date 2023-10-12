import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalChartComponent } from './technical-chart.component';
import { PopupsModule } from '../../../jz-ui-controls/j3-popups/popups.module';
import { TechanService } from '../techan/techan.service';
/*import { JzTechanModule } from '../jz-techan/jz-techan.module';*/

@NgModule({
  declarations: [TechnicalChartComponent],
  imports: [
    CommonModule,
    PopupsModule,
    /*JzTechanModule*/
  ],
  exports: [TechnicalChartComponent],
  providers: [TechanService], 
})
export class TechnicalChartModule { }
