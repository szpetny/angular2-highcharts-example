import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XtableRoutingModule } from '../xtable/xtable-routing.module';

import { XtableComponent } from './xtable.component';


@NgModule({
  imports: [
    CommonModule, XtableRoutingModule
  ],
  declarations: [XtableComponent],
  exports: [XtableComponent]
})
export class XtableModule { }
