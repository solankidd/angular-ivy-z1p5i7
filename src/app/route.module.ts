import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const route: Routes = [
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