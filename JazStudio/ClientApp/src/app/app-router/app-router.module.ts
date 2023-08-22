import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../../regions/welcome/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../../regions/jaz-studio/jaz-studio.module').then(m => m.JazStudioModule)
  },
  {
    path: 'dataviz',
    loadChildren: () => import('../../regions/data-viz/data-viz.module').then(m => m.DataVizModule)
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ]
})
export class AppRouterModule { }


