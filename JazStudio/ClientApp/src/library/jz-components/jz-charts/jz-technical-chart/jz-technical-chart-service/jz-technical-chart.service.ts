import { Injectable } from '@angular/core';

import * as d3_scale from 'd3-scale';
import * as d3_time from 'd3-time';
import * as d3_time_format from 'd3-time-format';
import { Scales } from './scales';


@Injectable({
  providedIn: 'root',
})
export class TechanService {

  scale: Scales = new Scales();

 constructor() { }

}
