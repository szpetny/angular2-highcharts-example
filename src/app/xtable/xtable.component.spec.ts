/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XtableComponent } from './xtable.component';

describe('XtableComponent', () => {
  let component: XtableComponent;
  let fixture: ComponentFixture<XtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
