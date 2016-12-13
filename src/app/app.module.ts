import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { XchartModule } from './xchart/xchart.module';
import { XformModule } from './xform/xform.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    XchartModule,
    XformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
