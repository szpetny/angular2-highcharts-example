import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XformComponent } from './xform.component';

@NgModule({
  imports: [
    RouterModule.forChild([
     { path: 'xform',  component: XformComponent }
   ])
  ],
  exports: [
   RouterModule
 ]
})
export class XformRoutingModule { }
