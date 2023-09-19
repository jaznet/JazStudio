import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  baseUrl: any;
  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getHistory() {
  
    return this.httpClient.get(this.baseUrl + 'finance/GetHistory');  
  }
}
