import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XaladinComponent } from './xaladin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'xaladin', component: XaladinComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class XaladinRoutingModule { }
