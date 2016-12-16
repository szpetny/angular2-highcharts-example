import { NgModule } from '@angular/core';

import { XchartModule } from '../xchart/xchart.module';
import { XformModule } from '../xform/xform.module';
import { XuniverseRoutingModule } from '../xuniverse/xuniverse-routing.module';

import { XuniverseComponent } from './xuniverse.component';

@NgModule({
  imports: [
    XuniverseRoutingModule,
    XchartModule,
    XformModule
  ],
  declarations: [XuniverseComponent]
})
export class XuniverseModule { }
