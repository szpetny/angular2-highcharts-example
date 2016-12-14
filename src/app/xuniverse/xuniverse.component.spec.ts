/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XuniverseComponent } from './xuniverse.component';

describe('XuniverseComponent', () => {
  let component: XuniverseComponent;
  let fixture: ComponentFixture<XuniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
