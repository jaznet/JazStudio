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
    loadChildren: () => import('../../regions/jazstudio/jaz-studio.module').then(m => m.JazStudioModule)
  },
  {
    path: 'dataviz',
    loadChildren: () => import('../../regions/dataviz/dataviz.module').then(m => m.DatavizModule)
  },
  {
    path: 'sandbox',
    loadChildren: () => import('../../regions/sandbox/sandbox.module').then(m => m.SandboxModule)
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


