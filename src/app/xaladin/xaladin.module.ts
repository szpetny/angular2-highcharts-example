import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaladinRoutingModule } from './xaladin-routing.module';
import { XaladinComponent } from './xaladin.component';

@NgModule({
  imports: [
    CommonModule, XaladinRoutingModule
  ],
  declarations: [XaladinComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [XaladinComponent]
})
export class XaladinModule { }
