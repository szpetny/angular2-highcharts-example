import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { XformComponent } from './xform.component';
import { XformRoutingModule } from './xform-routing.module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, XformRoutingModule
  ],
  declarations: [XformComponent]
})
export class XformModule { }
