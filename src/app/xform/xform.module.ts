import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { XformComponent } from './xform.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [XformComponent],
  exports: [XformComponent]
})
export class XformModule { }
