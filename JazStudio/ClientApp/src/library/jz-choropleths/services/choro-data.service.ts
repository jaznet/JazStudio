import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { Election2020 } from '../models/election2020';

@Injectable({
  providedIn: 'root'
})
export class ChoroDataService {

  @Output() electionDataReadyEvent = new EventEmitter<any>();
  @Output() httpErrorEvent = new EventEmitter<any>();

  Election2020Dictionary: { [index: string]: Election2020 } = {};
  Election2020List: any[] = [];

  baseUrl;

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getElection2020() {
    return this.httpClient.get(this.baseUrl + 'jazdb/GetElection2020');
  }

  buildElectionTable() {
    this.getElection2020().subscribe(
      (data: any) => {
        this.Election2020List = data;
        data.forEach((county: any) => {
          county.stateFips = county.CountyFips.substr(0, 2);
          this.Election2020Dictionary[county.CountyFips] = county;
        //  this.electionLookup.set(county.CountyFips, county);
        });
       // console.log(this.Election2020Dictionary);
        this.electionDataReadyEvent.emit('ready');
      },
      (error: HttpErrorResponse) => {
        this.httpErrorEvent.emit(error);
      });
  }

}
