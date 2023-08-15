import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { HttpError } from '../http-error';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  @Output() loadingPopOverEvent = new EventEmitter<any>();
  @Output() httpErrorPopOverEvent = new EventEmitter<any>();

  baseUrl;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl
  }

  raiseLoadingPopOverEvent(target:string, action: string, source:string, message: string) {
    const event: { target: string; action: string; source: string; message: string } = {
      target: target,
      action: action,
      source: source,
      message: message
    }
    this.loadingPopOverEvent.emit(event);
  }

  raiseHttpErrorPopOverEvent(target: string, status:any, statusText:any,url:string, error: HttpErrorResponse) {

    const httpError = new HttpError(
      error.name,
      error.message,
      error.error,
      error.ok,
      error.headers,
      error.status,
      error.statusText,
      error.url,
      error.type
    );

    const event: { target: string, url:any,status:any, error: HttpErrorResponse } = {
      target: target,
      url: url,
      status: status,
      error: error
    }

    httpError.target = target;
    httpError.baseUrl = this.baseUrl;
   // httpError.type = error.type.toString();
    this.httpErrorPopOverEvent.emit(event);

  }
}
