import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquitiesService {
  baseUrl: any;
  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
}

  getCompanies() {
    return this.httpClient.get(this.baseUrl + 'dashboard/GetCompanyList');  
  }

  getStockHistory(ticker: string) {
  /*  return this.httpClient.get(this.baseUrl + 'home/GetStockHistory?NVDA');*/
    return this.httpClient.get(this.baseUrl + 'dashboard/GetStockHistory/'+ ticker);
  }
}
