import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResDashComponent } from './components/res-dash/res-dash.component';

const route: Routes = [
  {
    path: 'home',
    component: ResDashComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule {}