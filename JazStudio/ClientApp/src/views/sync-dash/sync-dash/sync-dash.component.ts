import { Component, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';
import { registerLicense } from '@syncfusion/ej2-base';


@Component({
  selector: 'app-sync-dash',
  templateUrl: './sync-dash.component.html',
  styleUrls: ['./sync-dash.component.css']
})
export class SyncDashComponent implements OnInit {
    ngOnInit(): void {
      registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUH9ZcH1RQGFeVEdxXQ==');
    }

}
