
import { Injectable } from '@angular/core';
import { StateLookup } from '../models/state-lookup';

@Injectable({
  providedIn: 'root'
})
export class StateLookupService {

  constructor() {
    this.stateLookups.forEach((state: any) => {
      this.statesDictionary[state.fips] = state;
    })
  }

  statesDictionary: { [index: string]: StateLookup } = {};

  stateLookups: StateLookup[] = [
    {
      fips: "01",
      albersRotate: 5,
      stateName: "Alabama",
      stateAbbr: "AL",
      dx: 0,
      dy: 0
    }, {
      fips: "02",
      albersRotate: 5,
      stateName: "Alaska",
      stateAbbr: "AK",
      dx: 30,
      dy: -16
    }, {
      fips: "04",
      albersRotate: -9.1,
      stateName: "Arizona",
      stateAbbr: "AZ",
      dx: 0,
      dy: 0
    }, {
      fips: "05",
      albersRotate: 1.7,
      stateName: "Arkansas",
      stateAbbr: "AR",
      dx: -2,
      dy: 0
    }, {
      fips: "06",
      albersRotate: -15.2,
      stateName: "California",
      stateAbbr: "CA",
      dx: 0,
      dy: 30
    }, {
      fips: "08",
      albersRotate: -5.7,
      stateName: "Colorado",
      stateAbbr: "CO",
      dx: 0,
      dy: 0
    }, {
      fips: "09",
      albersRotate: 13,
      stateName: "Conn",
      stateAbbr: "CT",
      dx: 1,
      dy: 0
    }, {
      fips: "10",
      albersRotate: 12,
      stateName: "DE",
      stateAbbr: "DE",
      dx: 0,
      dy: 10
    }, {
      fips: "11",
      albersRotate: 0,
      stateName: "DC",
      stateAbbr: "DC",
      dx: 0,
      dy: 0
    }, {
      fips: "12",
      albersRotate: 5,
      stateName: "Florida",
      stateAbbr: "FL",
      dx: 49,
      dy: 0
    }, {
      fips: "13",
      albersRotate: 6,
      stateName: "Georgia",
      stateAbbr: "GA",
      dx: 0,
      dy: 0
    }, {
      fips: "15",
      albersRotate: 0,
      stateName: "Hawaii",
      stateAbbr: "HI",
      dx: 0,
      dy: 14
    }, {
      fips: "16",
      albersRotate: -11.8,
      stateName: "Idaho",
      stateAbbr: "ID",
      dx: 0,
      dy: 30
    }, {
      fips: "17",
      albersRotate: 3.5,
      stateName: "Illinois",
      stateAbbr: "IL",
      dx: 0,
      dy: 0
    }, {
      fips: "18",
      albersRotate: 6.1,
      stateName: "Indiana",
      stateAbbr: "IN",
      dx: 0,
      dy: 0
    }, {
      fips: "19",
      albersRotate: 1.5,
      stateName: "Iowa",
      stateAbbr: "IA",
      dx: 0,
      dy: 0
    }, {
      fips: "20",
      albersRotate: -1.65,
      stateName: "Kansas",
      stateAbbr: "KS",
      dx: 0,
      dy: 0
    }, {
      fips: "21",
      albersRotate: 5,
      stateName: "Kentucky",
      stateAbbr: "KY",
      dx: 10,
      dy: 10
    }, {
      fips: "22",
      albersRotate: 0.7,
      stateName: "Louisiana",
      stateAbbr: "LA",
      dx: -4,
      dy: 18
    }, {
      fips: "23",
      albersRotate: 16.2,
      stateName: "Maine",
      stateAbbr: "ME",
      dx: 0,
      dy: 0
    }, {
      fips: "24",
      albersRotate: 10.6,
      stateName: "MD",
      stateAbbr: "MD",
      dx: 0,
      dy: 0
    }, {
      fips: "25",
      albersRotate: 12.1,
      stateName: "Mass",
      stateAbbr: "MA",
      dx: -10,
      dy: 2
    }, {
      fips: "26",
      albersRotate: 6.6,
      stateName: "Michigan",
      stateAbbr: "MI",
      dx: 32,
      dy: 40
    }, {
      fips: "27",
      albersRotate: 1,
      stateName: "Minnesota",
      stateAbbr: "MN",
      dx: -14,
      dy: 0
    }, {
      fips: "28",
      albersRotate: 4,
      stateName: "Mississippi",
      stateAbbr: "MS",
      dx: 3,
      dy: 0
    }, {
      fips: "29",
      albersRotate: 1,
      stateName: "Missouri",
      stateAbbr: "MO",
      dx: 0,
      dy: 0
    }, {
      fips: "30",
      albersRotate: -8,
      stateName: "Montana",
      stateAbbr: "MT",
      dx: 0,
      dy: 0
    }, {
      fips: "31",
      albersRotate: -2,
      stateName: "Nebraska",
      stateAbbr: "NE",
      dx: 0,
      dy: 0
    }, {
      fips: "32",
      albersRotate: -12.4,
      stateName: "Nevada",
      stateAbbr: "NV",
      dx: 0,
      dy: -10
    }, {
      fips: "33",
      albersRotate: 5,
      stateName: "NH",
      stateAbbr: "NH",
      dx: -4,
      dy: 10
    }, {
      fips: "34",
      albersRotate: 9,
      stateName: "NJ",
      stateAbbr: "NJ",
      dx: 0,
      dy: 0
    }, {
      fips: "35",
      albersRotate: -6.5,
      stateName: "New Mexico",
      stateAbbr: "NM",
      dx: 0,
      dy: 0
    }, {
      fips: "36",
      albersRotate: 11,
      stateName: "New York",
      stateAbbr: "NY",
      dx: 0,
      dy: 10
    }, {
      fips: "37",
      albersRotate: 8,
      stateName: "North Carolina",
      stateAbbr: "NC",
      dx: 1,
      dy: 0
    }, {
      fips: "38",
      albersRotate: -2.3,
      stateName: "North Dakota",
      stateAbbr: "ND",
      dx: 0,
      dy: 8
    }, {
      fips: "39",
      albersRotate: 6.8,
      stateName: "Ohio",
      stateAbbr: "OH",
      dx: 0,
      dy: 4
    }, {
      fips: "40",
      albersRotate: -1.8,
      stateName: "Oklahoma",
      stateAbbr: "OK",
      dx: 30,
      dy: 0
    }, {
      fips: "41",
      albersRotate: -15,
      stateName: "Oregon",
      stateAbbr: "OR",
      dx: 0,
      dy: 0
    }, {
      fips: "42",
      albersRotate: 10.8,
      stateName: "Pennsylvania",
      stateAbbr: "PA",
      dx: 0,
      dy: 0
    }, {
      fips: "44",
      albersRotate: 13,
      stateName: "RI",
      stateAbbr: "RI",
      dx: 0,
      dy: 0
    }, {
      fips: "45",
      albersRotate: 4,
      stateName: "South Carolina",
      stateAbbr: "SC",
      dx: 0,
      dy: -11
    }, {
      fips: "46",
      albersRotate: -2.2,
      stateName: "South Dakota",
      stateAbbr: "SD",
      dx: 2,
      dy: 0
    }, {
      fips: "47",
      albersRotate: 5.1,
      stateName: "Tennessee",
      stateAbbr: "TN",
      dx: -10,
      dy: 8
    }, {
      fips: "48",
      albersRotate: -2.3,
      stateName: "Texas",
      stateAbbr: "TX",
      dx: 10,
      dy: 0
    }, {
      fips: "49",
      albersRotate: -9.8,
      stateName: "Utah",
      stateAbbr: "UT",
      dx: 0,
      dy: 0
    }, {
      fips: "50",
      albersRotate: 14.4,
      stateName: "VT",
      stateAbbr: "VT",
      dx: 0,
      dy: 0
    }, {
      fips: "51",
      albersRotate: 9.4,
      stateName: "Virginia",
      stateAbbr: "VA",
      dx: 14,
      dy: 10
    }, {
      fips: "53",
      albersRotate: -14.1,
      stateName: "Washington",
      stateAbbr: "WA",
      dx: 8,
      dy: 0
    }, {
      fips: "54",
      albersRotate: 9.5,
      stateName: "W.V.",
      stateAbbr: "WV",
      dx: -10,
      dy: 10
    }, {
      fips: "55",
      albersRotate: 3.1,
      stateName: "Wisconsin",
      stateAbbr: "WI",
      dx: 0,
      dy: 0
    }, {
      fips: "56",
      albersRotate: -6.9,
      stateName: "Wyoming",
      stateAbbr: "WY",
      dx: 0,
      dy: 0
    }

  ];
}
