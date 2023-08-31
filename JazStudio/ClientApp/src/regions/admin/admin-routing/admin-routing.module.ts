import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'home',
        component: AdminHomeComponent
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
export class AdminRoutingModule { }
