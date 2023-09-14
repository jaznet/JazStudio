
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoroUSAComponent } from './choro-usa/choro-usa.component';

const routes: Routes = [
  {
    path: '',
    component: ChoroUSAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoroUsaRouter { }
