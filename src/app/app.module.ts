import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteModule } from './route.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResDashComponent } from './components/res-dash/res-dash.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouteModule ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    ResDashComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
