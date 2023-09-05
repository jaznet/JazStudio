import { Injectable } from '@angular/core';
import * as d3Select from 'd3-selection';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  d3svg: any | undefined;
  d3grp: any | undefined

  usa_svg: any | undefined;
  usa_grp: any | undefined;

  usa_div_node: any | undefined;
  usa_div_rect: DOMRect | undefined;

  usa_svg_rect: DOMRect | undefined;
  usa_svg_bbox: SVGRect | undefined;
  usa_svg_cntr_rect: DOMPoint | undefined;
  usa_svg_cntr_bbox!: SVGPoint | undefined;

  usa_grp_rect: DOMRect | undefined;
  usa_grp_bbox: SVGRect | undefined;

  usa_grp_cntr_rect: DOMPoint | undefined;
  usa_grp_cntr_bbox: SVGPoint | undefined;

  grptext: any;
  grprect: any;

  constructor() { }

  initialize() {

    this.d3svg = d3Select.select("#usa-svg");
    this.d3grp = d3Select.select("#usa-grp");
    console.log(this.usa_svg, this.usa_grp);

    this.usa_svg_bbox = this.usa_svg!.getBBox();
    this.usa_svg_rect = this.usa_svg!.getBoundingClientRect();
    this.usa_svg_cntr_rect = new DOMPoint( this.usa_svg_rect!.width / 2, this.usa_svg_rect!.height / 2);

    this.usa_svg_cntr_bbox! = this.usa_svg!.createSVGPoint();
    this.usa_svg_cntr_bbox!.x = this.usa_svg_cntr_bbox!.x + (this.usa_svg_bbox!.width / 2);
    this.usa_svg_cntr_bbox!.y = this.usa_svg_cntr_bbox!.y + (this.usa_svg_bbox!.height / 2);

    this.usa_grp = d3Select.select("#usa-grp");
    this.usa_grp_bbox = this.usa_grp!.node().getBBox();
    this.usa_grp_rect = this.usa_grp!.node().getBoundingClientRect();
    this.usa_grp_cntr_rect = new DOMPoint(this.usa_grp_rect!.width / 2, this.usa_grp_rect!.height / 2);

    this.usa_grp_cntr_bbox = this.usa_svg!.createSVGPoint();
    this.usa_grp_cntr_bbox!.x = this.usa_grp_bbox!.x + (this.usa_grp_bbox!.width / 2);
    this.usa_grp_cntr_bbox!.y = this.usa_grp_bbox!.y + (this.usa_grp_bbox!.height / 2);

   // this.drawMarkers();
  }

  update() {
    this.d3grp = d3Select.select("#usa-grp");
    this.usa_grp = d3Select.select("#usa-grp");
    this.usa_grp_bbox = this.usa_grp!.node().getBBox();
    this.usa_grp_rect = this.usa_grp!.node().getBoundingClientRect();
    this.usa_grp_cntr_rect = new DOMPoint(this.usa_grp_rect!.width / 2, this.usa_grp_rect!.height / 2);

    this.usa_grp_cntr_bbox = this.usa_svg!.createSVGPoint();
    this.usa_grp_cntr_bbox!.x = this.usa_grp_bbox!.x + (this.usa_grp_bbox!.width / 2);
    this.usa_grp_cntr_bbox!.y = this.usa_grp_bbox!.y + (this.usa_grp_bbox!.height / 2);
  }

  drawMarkers() {
    //#region markers 
    let rect1 = this.d3svg!.append('rect')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", this.usa_svg_rect!.width)
      .attr("height", this.usa_svg_rect!.height)
      .style("fill", "transparent")
      .style("stroke", "white");

    let line_AC_1 = this.d3svg!.append('line')
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", this.usa_svg_rect!.width)
      .attr("y2", this.usa_svg_rect!.height)
      .style("fill", "transparent")
      .style("stroke", "white");

    let line_BD_1 = this.d3svg!.append('line')
      .attr("x1", this.usa_svg_rect!.width)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", this.usa_svg_rect!.height)
      .style("fill", "transparent")
      .style("stroke", "white");

    this.grprect = this.d3grp!.append('rect')
      .attr("x", this.usa_grp_bbox!.x)
      .attr("y", this.usa_grp_bbox!.y)
      .attr("width", this.usa_grp_rect!.width)
      .attr("height", this.usa_grp_rect!.height)
      .style("fill", "transparent")
      .style("stroke", "yellow");

    let line_AC_2 = this.d3grp!.append('line')
      .attr("x1", this.usa_grp_bbox!.x)
      .attr("y1", this.usa_grp_bbox!.y)
      .attr("x2", this.usa_grp_bbox!.x + this.usa_grp_bbox!.width)
      .attr("y2", this.usa_grp_bbox!.y + this.usa_grp_bbox!.height)
      .style("fill", "transparent")
      .style("stroke", "yellow");

    let line_BD_2 = this.d3grp!.append('line')
        .attr("x1", this.usa_grp_bbox!.x + this.usa_grp_bbox!.width)
        .attr("y1", this.usa_grp_bbox!.y)
        .attr("x2", this.usa_grp_bbox!.x)
        .attr("y2", this.usa_grp_bbox!.y + this.usa_grp_bbox!.height)
        .style("fill", "transparent")
        .style("stroke", "yellow");

    let grp_circ = this.d3grp!.append('circle')
      .attr("cx", this.usa_grp_cntr_bbox!.x)
      .attr("cy", this.usa_grp_cntr_bbox!.y)
      .attr("r", 12)
      .style("fill", "yellow")
      .style("stroke", "black");

    let textrext2 = this.d3grp!
      .append('rect')
      .attr("x", this.usa_grp_cntr_bbox!.x - 24)
      .attr("y", this.usa_grp_cntr_bbox!.y - 6)
      .attr("width", 48)
      .attr("height", 12)
      .style("fill", "yellow")
      .style("stroke", "black");

    this.grptext = this.d3grp!.append('text')
      .attr("x", this.usa_grp_cntr_bbox!.x)
      .attr("y", this.usa_grp_cntr_bbox!.y)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", '8px')
      .text(
        Math.floor(this.usa_grp_bbox!.x + (this.usa_grp_bbox!.width / 2)) + 'x' +
        Math.floor(this.usa_grp_bbox!.y + (this.usa_grp_bbox!.height / 2)))
      .style("fill", "black")
      .style("stroke-width", ".5")
      .style("stroke", "black");

    let svg_circ = this.d3svg!.append('circle')
      .attr("cx", this.usa_svg_cntr_rect!.x)
      .attr("cy", this.usa_svg_cntr_rect!.y)
      .attr("r", 10)
      .style("fill", "black")
      .style("stroke", "white");

    let textrext1 = this.d3svg!
      .append('rect')
      .attr("x", this.usa_svg_cntr_rect!.x - 24)
      .attr("y", this.usa_svg_cntr_rect!.y - 6)
      .attr("width", 48)
      .attr("height", 12)
      .style("fill", "black")
      .style("stroke", "white");

    let text1 = this.d3svg!
      .append('text')
      .attr("x", this.usa_svg_cntr_rect!.x)
      .attr("y", this.usa_svg_cntr_rect!.y)
      /*     .attr("dx", '20px')*/
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", '8px')
      .text(Math.floor(this.usa_svg_cntr_rect!.x) + 'x' + Math.floor(this.usa_svg_cntr_rect!.y))
      .style("background-color", "white")
      .style("fill", "white")
      .style("stroke-width", "0")
      .style("stroke", "white");
    //#endregion

  }

}
