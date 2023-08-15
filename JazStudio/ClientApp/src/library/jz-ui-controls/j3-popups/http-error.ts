import { HttpHeaders } from "@angular/common/http";


export class HttpError {
  name: string = '';
  message: string = 'error object msg';
  error: any;
  ok: boolean = false;
  headers: HttpHeaders;
  status: number = 0;
  statusText: string = '';
  url: string = 'url';
  type: any;

  target: string = 'target';
  baseUrl: string = 'base';

  constructor(name: string, message: string, error:any, ok:boolean, headers:HttpHeaders, status: number, statustext: string, url: any, type:any) {
    this.name = name;
    this.message = message;
    this.error = error;
    this.ok = ok;
    this.headers = headers,
    this.status = status;
    this.statusText = statustext;
    this.url = url;
    this.type = type;
  }
}
