import { Injectable, OnInit } from '@angular/core';
import * as techan from '../techan/techan.js';

@Injectable({
  providedIn: 'root'
})
export class TechanService implements OnInit {
  techan: any;
  constructor() {
  }

  ngOnInit(): void {
   
  }
}
