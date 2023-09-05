import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopoJsonService } from '../../../library/jz-choropleths/services/topo-json.service';
import * as d3 from 'd3';
import * as d3Select from 'd3-selection';
import * as d3Zoom from 'd3-zoom';
import { MarkersService } from '../../../library/jz-choropleths/services/markers.service';
import { ChoroDataService } from '../../../library/jz-choropleths/services/choro-data.service';
import { ChoroUtilsService } from '../../../library/jz-choropleths/services/choro-utils.service';
import { StateLookupService } from '../../../library/jz-choropleths/services/state-lookup.service';
import * as topojson from 'topojson';

@Component({
  selector: 'app-choro-usa',
  templateUrl: './choro-usa.component.html',
  styleUrls: ['./choro-usa.component.css']
})
export class ChoroUSAComponent {
  @ViewChild('USA', { static: true }) USA_Ref: ElementRef | undefined;
  @ViewChild('USA_svg', { static: true }) USA_svg_Ref!: ElementRef | any;
  @ViewChild('USA_grp', { static: true }) USA_grp_Ref!: ElementRef | any;
  //@ViewChild('httperrorpopover', { static: false }) httpErrorPopOver: HttpErrorPopoverComponent | any;
/*  @ViewChild('loadingpopover', { static: false }) loadingpopover: LoadingPopoverComponent | any;*/

  private stateLayer: any;
  private countyLayer: any;
  private nationLayer: any;
  private stateTextLayer: any;
  private geoPath = d3.geoPath();

  constructor(
    private elementRef: ElementRef,
    private topoService: TopoJsonService,
    private markers: MarkersService,
    private dataService: ChoroDataService,
    private choroUtils: ChoroUtilsService,  
    private stateLookup: StateLookupService,
    ////private choroDashService: ChorodashService,
   
  
  ) { }

  ngOnInit(): void {
    this.topoService.albersUsaLoadedEvent.subscribe(d => {
      console.log('%c  topoService is ready', 'color:#38A869', d);
      this.createChoropleth();
    },
      (error) => {
        console.log(error);
      }
    );

    //this.dataService.httpErrorEvent.subscribe(d => {
    //  this.httpErrorPopOver.isPopupVisible = true;
    //});
  }

  ngAfterContentInit(): void {
    this.markers.usa_svg = this.USA_svg_Ref.nativeElement;
    this.markers.usa_grp = this.USA_grp_Ref.nativeElement;
    console.log(this.markers.usa_svg, this.markers.usa_grp);
  }

  createChoropleth() {
    this.createChoroplethContainer();
    this.createStatesMesh();
    this.createCountyLayer();
    this.createNationLayer();
    this.createStatesTextLayer();
    this.transformTranslate();

    //this.loadingpopover.message = 'Election Results';
    //this.loadingpopover.isPopupVisible = true;
    //TODO Develop Choropleth Data Service
    this.dataService.buildElectionTable();

    this.dataService.electionDataReadyEvent.subscribe((d: any) => {
    //  this.loadingpopover.isPopupVisible = false;
      this.paintCounties();
    },
      (error: any) => {
        console.log(error);
      });
  }

  createChoroplethContainer() {
    console.groupCollapsed('%c  Create Choropleth Container USA', 'color:#06729D', this.USA_Ref?.nativeElement);
    let usa = this.USA_svg_Ref!;
    let county = this.USA_svg_Ref!.firstChild;
    console.log('%cSVG usa       ', 'color:#E3C382', usa);
    console.log('%cSVG county    ', 'color:#E3C382', county);

    if (this.countyLayer != undefined) {
      this.countyLayer.remove();
    }

    d3Select.select(this.USA_Ref!.nativeElement).select("svg").select("g").append('g').attr('id', 'county-layer');
    d3Select.select(this.USA_Ref!.nativeElement).select("svg").select("g").append('g').attr('id', 'state-layer');
    d3Select.select(this.USA_Ref!.nativeElement).select("svg").select("g").append('g').attr('id', 'nation-layer');
    d3Select.select(this.USA_Ref!.nativeElement).select("svg").select("g").append('g').attr('id', 'state-name-layer');

    this.stateLayer = d3Select.select("#state-layer");
    this.countyLayer = d3Select.select("#county-layer");
    this.nationLayer = d3Select.select("#nation-layer");
    this.stateTextLayer = d3Select.select("#state-name-layer");

    console.log('%cSVG county   ', 'color:#E3C382', this.stateLayer);
    console.log('%cSVG county   ', 'color:#E3C382', this.countyLayer);
    console.groupEnd();
  }

  createStatesMesh() {
    console.groupCollapsed('%c  Create States', 'color:#06729D');
    //  console.log('data', this.topoService.stateMesh.coordinates);
    var that = this;

    const stateLayer: any = d3Select.select("#state-layer")
      .attr("id", "state-layer")
      .attr("class", "state_style");

    stateLayer
      .append("path")
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '.3')
      .attr("id", 'statemesh')
      .attr('bbox', function (d: any) {
        return 'jaz';
      })
      .attr("class", "state_path")
      .attr("d", that.geoPath(that.topoService.stateMesh))
      .on('mouseenter', (d: any, event: MouseEvent) => {
        // change stroke
        console.log(d);
      })
      ;

    console.groupEnd();
  }

  createCountyLayer() {
    var that = this;

    d3Select.select("#county-layer")
      .attr("id", "county-layer")
      .selectAll("path")
      .data(that.topoService.countyFeaturesCollection?.features)
      .enter()
      .append("path")
      .style('stroke', '#404040')
      .style('stroke-width', '.2')
      .style("fill", function (d: any) {
        return 'pink';
      })

      .attr("fips", function (d: any) { return d.id; })
      .attr("class", "nslx")
      .attr("name", function (d: any) { return d.properties.name; })
      .attr("d", function (d: any) {
        if (d.id === "12087" || d.id === "02016" || d.id === "02050") {
          const coord = that.geoPath(topojson.mesh(d, d.geometry.coordinates, (a: any, b: any) => a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0)));
        }
        return "M" + d.geometry.coordinates;
      })

      .on("click", function (m, d: any) {
        console.log('%c  County selected GEOID: ', 'color:#68b1ff', d.id);
        //  that.choroDashService.countySelected(d.id);
      })

      .on('mouseover', function (d, fips) {
        //let t = this.select('path');
        //this.style("fill", "yellow");
        // console.log(this);
      })
      .on('mouseenter', function (d) {
        //let t = this.select('path');
        //this.style("fill", "yellow");
        //console.log(d.properties.NAME);
        //   that.highlightCounty(d, this, that);
      })
      .on('mouseleave', function (d: any) {
        //let t = this.select('path');
        //this.style("fill", "yellow");
        //   that.unhighlightCounty(d, this, that);
      })

      .append("title")
      .text(function (d: any) {
        return d.properties.name + ', ';// + that.choroService.countyInformationDictionary[d.properties.GEOID].State;
      })
      .attr('class', 'countyPopup')
      .style('stroke', '#cc44cc');
    console.groupEnd();
  }

  createNationLayer() {
    console.groupCollapsed('%c  Create Nation', 'color:#06729D');
    // console.log('data', this.topoService.nationMesh.coordinates);
    var that = this;

    const t = topojson;
    d3Select.select("#nation-layer")
      .attr("id", "nation-layer")
      .attr("class", "nation_style")
      .selectAll("path")
      .data(this.topoService.nationFeaturesCollection.features)
      .enter()
      .append("path")
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '.5px')
      .attr("d", that.geoPath(that.topoService.nationMesh))
      .attr("class", "nation_path");

    let node: SVGGElement = this.stateLayer.node();

    console.groupEnd();
  }

  createStatesTextLayer() {
    const that = this;
    const stateNameLayer: any = d3Select.select("#state-name-layer")
      .attr("id", "state-name-layer")
      .attr("class", "small");

    stateNameLayer
      .selectAll("text")
      .data(this.topoService.stateFeaturesCollection!.features)
      .enter()
      .append("text")
      .attr("id", function (d: any) {
        return d.id;
      })
      .attr('bbox', function (d: any) {
        const bbox = that.choroUtils.GetPathBounds("M" + d.geometry.coordinates);
        const xctr = bbox[0] + ((bbox[2] - bbox[0]) / 2);
        return bbox;
      })
      .attr('transform', function (d: any) {
        const bbox = that.choroUtils.GetPathBounds("M" + d.geometry.coordinates);
        const x = (bbox[0] + ((bbox[2] - bbox[0]) / 2)) + that.stateLookup.statesDictionary[d.id].dx;
        const y = (bbox[1] + ((bbox[3] - bbox[1]) / 2)) + that.stateLookup.statesDictionary[d.id].dy;
        const angle = that.stateLookup.statesDictionary[d.id].albersRotate;
        const rotate: string = 'rotate(' + (angle * -1) + ',' + x + ',' + y + ')';
        return rotate;
      })
      .attr('x', function (d: any) {
        const bbox = that.choroUtils.GetPathBounds("M" + d.geometry.coordinates);
        const xctr = (bbox[0] + ((bbox[2] - bbox[0]) / 2)) + that.stateLookup.statesDictionary[d.id].dx;;
        return xctr;
      })
      .attr('y', function (d: any) {
        const bbox = that.choroUtils.GetPathBounds("M" + d.geometry.coordinates);
        const yctr = (bbox[1] + ((bbox[3] - bbox[1]) / 2)) + that.stateLookup.statesDictionary[d.id].dy;
        return yctr;
      })
      .text(function (d: any) {
        return that.stateLookup.statesDictionary[d.id].stateName;
      })
      .attr('class', 'shadow')
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .style('stroke', 'black')
      .style('font-size', '10px')
      .style('stroke-width', '.5px');
  }

  transformTranslate() {
    console.groupCollapsed('%c  Translate Transform', 'color:#06729D');

    this.markers.initialize();

    const zoom = d3Zoom.zoom()
      .scaleExtent([0.5, 2])
      .on('zoom', () => this.zoomed(this.markers.usa_grp!));

    //  const scale = 1.2;
    const scaleX = this.markers.usa_svg_rect!.width / this.markers.usa_grp_bbox!.width;
    const scaleY = this.markers.usa_svg_rect!.height / this.markers.usa_grp_bbox!.height;
    const scale = Math.min(scaleX, scaleY);


    const translateX = (this.markers.usa_svg_cntr_rect!.x - this.markers.usa_grp_cntr_bbox!.x);
    const translateY = (this.markers.usa_svg_cntr_rect!.y - this.markers.usa_grp_cntr_bbox!.y);
    const centerX = translateX * (1 - (1 / scale));
    const centerY = translateY * (1 - (1 / scale));

    this.markers.d3svg!.call(zoom);

    const initialTransform = d3Zoom.zoomIdentity
      .translate(
        translateX, // here's the crossover'
        translateY)
      .scale(scale)
      .translate(
        centerX,
        centerY);

    console.log(this.markers.usa_grp);
    //const transform = d3.zoomTransform(this.markers.usa_grp!);
    d3Select.select(this.markers.usa_grp!).call(zoom.transform, initialTransform);

    // this.markers.update();
    //this.markers.grptext.text(
    //  Math.floor(this.markers.usa_grp_bbox!.x + (this.markers.usa_grp_bbox!.width / 2)) + 'o' +
    //  Math.floor(this.markers.usa_grp_bbox!.y + (this.markers.usa_grp_bbox!.height / 2)))

    console.groupEnd();
  }

  zoomed(grpElement: any): void {
    const transform = d3.zoomTransform(grpElement);
    grpElement.attr('transform', transform.toString());

  }

  paintCounties() {
    this.countyLayer.selectAll('path').style('fill', (d: any) => {

      const county: any = this.dataService.Election2020Dictionary[d.id];
      if (county != undefined) {
        if (county.VotesDem < county.VotesGop) {
          return '#E05C6C';
        } else {
          return '#8281BB';
        }
      }
      else {
        return 'white';
      }
    });
  }
}
