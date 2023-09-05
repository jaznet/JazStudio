import { EventEmitter, Injectable, Output } from '@angular/core';
import * as topojson from 'topojson';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class TopoJsonService {

  @Output() albersUsaLoadedEvent = new EventEmitter<string>();

  countyFeaturesCollection: any | undefined;
  countyMesh: any;
  countiesReady: boolean = false;
  stateFeaturesCollection: any | undefined;
  stateMesh: any;
  statesReady: boolean = false;
  nationMesh: any;
  nationFeaturesCollection: any;
  private nationReady: boolean = false;

  constructor() {
    this.getCounties();
  }

  getCounties() {

    d3.json("/assets/maps/counties-albers-10m.json")
      .then((topo: any) => {
        const topology: { type: any, arcs: any, bbox: any, objects: any, transform: any } = topo;
        // console.log(topology);
        this.countyFeaturesCollection = topojson.feature(topology, topology.objects.counties);
        console.log('%c County Features', 'color:pink', this.countyFeaturesCollection);
        // this.counties!.features = this.countyFeaturesCollection.features;
        // this.counties!.properties.bbox = topology.bbox;
        this.countyMesh = topojson.mesh(topology, topology.objects.counties, (a, b) => a !== b);
        this.countiesReady = true;

        this.stateFeaturesCollection = topojson.feature(topology, topology.objects.states);
        //  this.states!.features = this.stateFeaturesCollection.features;
        //  this.states!.properties.bbox = topology.bbox;
        this.stateMesh = topojson.mesh(topology, topology.objects.states, (a, b) => a !== b);
        this.statesReady = true;

        this.nationFeaturesCollection = topojson.feature(topology, topology.objects.nation);
        this.nationMesh = topojson.mesh(topology, topology.objects.nation);
        this.nationReady = true;

        this.isAlbersReady();

      });

  }

  isAlbersReady() {
    if (this.countiesReady && this.statesReady) {
      this.albersUsaLoadedEvent.emit();
    }
  }

}
