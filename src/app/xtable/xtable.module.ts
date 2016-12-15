import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XtableComponent } from './xtable.component';

import { XtableRoutingModule } from '../xtable/xtable-routing.module';

@NgModule({
  imports: [
    CommonModule, XtableRoutingModule
  ],
  declarations: [XtableComponent],
  exports: [XtableComponent]
})
export class XtableModule { }
