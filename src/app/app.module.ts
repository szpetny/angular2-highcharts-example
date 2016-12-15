import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { XuniverseModule } from './xuniverse/xuniverse.module';
import { XtableModule } from './xtable/xtable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    XuniverseModule,
    XtableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
