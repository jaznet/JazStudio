import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { registerLicense } from '@syncfusion/ej2-base';
import { SyncLicService } from '../../../services/app-services/sync-lic.service';


@Component({
  selector: 'app-sync-dash',
  templateUrl: './sync-dash.component.html',
  styleUrls: ['./sync-dash.component.css']
})
export class SyncDashComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';
  @ViewChild('default_dashboard')

  public dashboard!: DashboardLayoutComponent;
  public count: number = 8;
  public cellSpacing: number[] = [10, 10];

  constructor(private sync: SyncLicService) { }
  
  ngOnInit(): void {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUH9ZcH1RQGFeVEdxXQ==');
  }

  ngAfterViewInit(): void {
    this.sync.HideSyncWarning();
  }

  addPanel(): void {
    let panel: PanelModel[] = [{
      'id': this.count.toString(), 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
      content: '<span id="close" class="e-template-icon e-close-icon"></span><div class="text-align">' + this.count.toString() + '</div>'
    }];
    this.dashboard.addPanel(panel[0]);
    let closeIcon: any = document.getElementById(this.count.toString())!.querySelector!('.e-close-icon');
    closeIcon.addEventListener('click', this.onCloseIconHandler.bind(this));
    this.count = this.count + 1;
  }

  onCloseIconHandler(event: any): void {
    if ((<HTMLElement>event.target).offsetParent) {
      this.dashboard.removePanel((<HTMLElement>event.target).offsetParent!.id);
    }
  }
}
