import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureViewComponent } from '../architecture-view/architecture-view.component';
import { ArchitectureHomeComponent } from '../architecture-home/architecture-home.component';

const routes: Routes = [
  {
    path: '',
    component: ArchitectureViewComponent,
    children: [
      {
        path: '',
        component: ArchitectureHomeComponent
      },
      {
        path: 'home',
        component: ArchitectureHomeComponent
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
export class ArchitectureRoutingModule { }
