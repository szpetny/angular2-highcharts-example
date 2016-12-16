/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XaladinComponent } from './xaladin.component';

describe('XaladinComponent', () => {
  let component: XaladinComponent;
  let fixture: ComponentFixture<XaladinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XaladinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XaladinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
