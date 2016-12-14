import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XformComponent } from '../xform/xform.component';
import { XchartComponent } from '../xchart/xchart.component';
import { XuniverseComponent } from './xuniverse.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'xuniverse', component: XuniverseComponent,
        children: [{path: 'xchart/:serverport/:filename', component: XchartComponent}]}
    ])
  ],
  exports: [RouterModule]
})
export class XuniverseRoutingModule { }
