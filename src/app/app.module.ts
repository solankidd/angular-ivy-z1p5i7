import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteModule } from './route.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResDashComponent } from './components/res-dash/res-dash.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ResDashComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
