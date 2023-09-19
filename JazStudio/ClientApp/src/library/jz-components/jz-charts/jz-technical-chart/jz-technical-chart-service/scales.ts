
import { Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3_array from 'd3-array';
import * as d3_scale from 'd3-scale'

@Injectable()
export class Scales implements OnInit {
  
/*  [x: string]: () => void;*/

  intradayTickSteps :any = [
    1e3,    // 1-second
    5e3,    // 5-second
    15e3,   // 15-second
    3e4,    // 30-second
    6e4,    // 1-minute
    3e5,    // 5-minute
    9e5,    // 15-minute
    18e5,   // 30-minute
    36e5,   // 1-hour
    108e5,  // 3-hour
    216e5,  // 6-hour
    432e5,  // 12-hour
    864e5   // 1-day
  ];
  dailyStep:any = 864e5;
  dailyTickSteps: any = [
    this.dailyStep,  // 1-day
    6048e5,     // 1-week
    2592e6,     // 1-month
    7776e6,     // 3-month
    31536e6     // 1-year
  ];
  scale_widen: any;
 
  genericFormat: any
 
  domain!: any
  padding: any
  outerPadding: any

  closestTicks!: any
  zoomable: any

  tickMethods: { daily: string | any[]; intraday: any } = { daily: 'daily' , intraday:'intraday' };
  zoomLimit!: { domain: any; }; 
 
  private dateIndexMap!: any[];
  tickFormat!: () => (date: any) => any;
  tickState!: { tickFormat: any; };

    private scale: any;
  private index: any; // Make sure to use the correct type here

  constructor() { }

  ngOnInit(): void {
    this.dateIndexMap = this.lookupIndex(this.domain);

    this.scale = (x: any, offset: number) => {
      var mappedIndex = this.dateIndexMap[x instanceof Date ? x.getTime() : +x];
      offset = offset || 0;

      // Make sure the value has been mapped, if not, determine if it's just before, round in, or just after domain
      if (mappedIndex === undefined) {
        if (this.domain[0] > x) mappedIndex = -1; // Less than min, round just out of domain
        else mappedIndex = d3_array.bisect(this.domain, x); // else let bisect determine where in or just after than domain it is
      }

      return this.index(mappedIndex + offset);
    };

    // Initialize the index property with your chosen method (d3.index or d3_scale.scaleLinear())
    this.index = d3.index || d3_scale.scaleLinear();

    this.zoomLimit = this.zoomLimit || { domain: this.index.domain() }; // Wrap in object to carry onto zoomable

/*    this.tickMethods = new {daily:'jaz'};*/

    this.tickState = { tickFormat: this.tickMethods.daily[this.tickMethods.daily.length - 1][2] }
  }

  countK(visibleDomain: string | any[], indexDomain: string | any[]) {
    return visibleDomain.length / (indexDomain[indexDomain.length - 1] - indexDomain[0]);
  }

  lookupIndex(array: any[]): any {
    var lookup: any = {};

    if (Array.isArray(array)) { // Check if 'array' is a valid array
      array.forEach(function (d, i) {
        lookup[+d] = i;
      });
    } else {
      // Handle the case where 'array' is not a valid array
      console.error('The provided array is not valid:', array);
    }

    return lookup;
  }

      rangeBand(linear: (arg0: number) => number, domain: string | any[], padding: number): number {
  return (Math.abs(linear(domain.length - 1) - linear(0)) / Math.max(1, domain.length - 1)) * (1 - padding);
}
 
  domainMap() {
  this.dateIndexMap = this.lookupIndex(this.domain);
}

  financetime() {
   
    let tickState = { tickFormat: this.tickMethods.daily[this.tickMethods.daily.length - 1][2] };
    let band:any = 3;

    this.index = this.index || d3.scaleLinear();
    this.domain = this.domain || [new Date(0), new Date(1)];
    this.padding = this.padding === undefined ? 0.2 : this.padding;
    this.outerPadding = this.outerPadding === undefined ? 0.65 : this.outerPadding;
    this.zoomLimit = this.zoomLimit || { domain: this.index.domain() };
    this.closestTicks = this.closestTicks || false;

    const copy =  (): any => {
      return this.financetime(
      );
    };


    const invert =  (y: number) => {
      var d = this.domain[invertToIndex(y)];
      return d ? d : null;
    };

    const invertToIndex =  (y: number) => {
      return Math.round(this.index.invert(y));
    };

    this.domain = function (_: any[]) {
      if (!arguments.length) {
        var visible = this.index.domain();

        if (visible[0] < 0 && visible[visible.length - 1] < 0) return [];

        visible = [
          Math.max(Math.ceil(visible[0]), 0),
          Math.min(Math.floor(visible[visible.length - 1]), this.domain.length - 1)
        ];
        return this.domain.slice(visible[0], visible[visible.length - 1] + 1);
      }

      this.domain = _;
      return applyDomain();
    };

    const zoomed = () => {
      band = this.rangeBand(this.index, this.domain, this.padding);
      return this.scale;
    }

    //this.domainMap = () => {
    //  this.dateIndexMap = this.lookupIndex(this.domain);
    //}

    const applyDomain = () => {
      this.domainMap();
      this.index.domain([0, this.domain.length - 1]);
      zoomed();
      this.index.domain(this.index.range().map(this.scale_widen(this.outerPadding, band)).map(this.index.invert));
      this.zoomLimit.domain = this.index.domain();
      return zoomed();
    }

    band = () => band;

    this.outerPadding = function (_: any) {
      if (!arguments.length) return this.outerPadding;
      this.outerPadding = _;
      return applyDomain();
    };

    this.padding = function (_: any) {
      if (!arguments.length) return this.padding;
      this.padding = _;
      return applyDomain();
    };

    this.zoomable = function () {
      return this.zoomable;
    };

    const tickMethod = (visibleDomain: string | any[], indexDomain: any, count: number) => {
      if (visibleDomain.length == 1) return this.genericFormat;

      var visibleDomainExtent = visibleDomain[visibleDomain.length - 1] - visibleDomain[0];
      var intraday = visibleDomainExtent / this.dailyStep < 1;
      var methods = intraday ? this.tickMethods.intraday : this.tickMethods.daily;
      var tickSteps = intraday ? this.intradayTickSteps : this.dailyTickSteps;
      var k = Math.min(Math.round(this.countK(visibleDomain, indexDomain) * count), count);
      var target = visibleDomainExtent / k;
      var i = d3_array.bisect(tickSteps, target);

      return i == methods.length ? methods[i - 1] :
        i ? methods[target / tickSteps[i - 1] < tickSteps[i] / target ? i - 1 : i] : methods[i];
    }

    this.closestTicks = function (_: boolean) {
      if (!arguments.length) return this.closestTicks;
      this.closestTicks = _;
      return this.scale;
    };

    this.tickFormat = function () {
      return function (date: any) {
        return tickState.tickFormat(date);
      };
    };

    this.domainMap();
    return zoomed();
  }
}


