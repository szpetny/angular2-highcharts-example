import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XtableComponent } from './xtable.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'xtable', component: XtableComponent }
    ])
  ],
  exports: [RouterModule]
})
export class XtableRoutingModule { }
