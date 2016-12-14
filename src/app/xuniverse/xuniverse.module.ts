import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [XuniverseComponent]
})
export class XuniverseModule { }
