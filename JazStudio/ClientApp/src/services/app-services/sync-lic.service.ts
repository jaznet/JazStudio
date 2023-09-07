import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncLicService {

  constructor(@Inject(DOCUMENT) private document: Document) {
   // const bodyElement: any = this.document.body;
  }

  HideSyncWarning() {
    const bodyElement: any = this.document.body;
    if (bodyElement) {
      const children = bodyElement.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const elementType = child.tagName.toLowerCase();
        if (elementType === 'div') {
          const lic: HTMLDivElement = child as HTMLDivElement;
          lic.className = 'sync-license';
        }
      }
    }
  }
}
