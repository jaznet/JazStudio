import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';
import { registerLicense } from '@syncfusion/ej2-base';
import { SyncLicService } from '../../../services/app-services/sync-lic.service';


@Component({
  selector: 'app-sync-dash',
  templateUrl: './sync-dash.component.html',
  styleUrls: ['./sync-dash.component.css']
})
export class SyncDashComponent implements OnInit, AfterViewInit {

  constructor(private sync: SyncLicService) {

  }
  

  ngOnInit(): void {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUH9ZcH1RQGFeVEdxXQ==');
  }

  ngAfterViewInit(): void {
    this.sync.HideSyncWarning();
  }

}
