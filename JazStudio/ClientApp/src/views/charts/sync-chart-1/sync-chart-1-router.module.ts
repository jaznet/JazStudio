import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyncChart1Component } from './sync-chart-1.component';



const routes: Routes = [
  {
    path: '',
    component: SyncChart1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncChart1RouterModule { }
