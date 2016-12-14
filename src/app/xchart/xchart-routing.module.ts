import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XchartComponent } from './xchart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'xchart/:serverport/:filename', component: XchartComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class XchartRoutingModule { }
