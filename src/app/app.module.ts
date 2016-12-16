import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { MainMenuModule } from './main-menu/main-menu.module';
import { XuniverseModule } from './xuniverse/xuniverse.module';
import { XtableModule } from './xtable/xtable.module';
import { XaladinModule } from './xaladin/xaladin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MainMenuModule,
    XuniverseModule,
    XtableModule,
    XaladinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
