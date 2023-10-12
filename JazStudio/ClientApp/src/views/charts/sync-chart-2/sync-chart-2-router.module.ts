import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyncChart2Component } from './sync-chart-2.component';



const routes: Routes = [
  {
    path: '',
    component: SyncChart2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncChart2RouterModule { }
