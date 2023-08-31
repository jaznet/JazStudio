import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeViewComponent } from '../backoffice-view/backoffice-view.component';
import { BackofficeHomeComponent } from '../backoffice-home/backoffice-home.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeViewComponent,
    children: [
      {
        path: '',
        component: BackofficeHomeComponent
      },
      {
        path: 'home',
        component: BackofficeHomeComponent
      },
      //{
      //  path: 'chorodash',
      //  component: ChorodashComponent
      //}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
