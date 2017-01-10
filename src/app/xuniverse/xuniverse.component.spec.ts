/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutletStubComponent, RouterStub } from '../testing/router-stubs';

import { XuniverseComponent } from './xuniverse.component';

describe('XuniverseComponent', () => {
  let component: XuniverseComponent;
  let fixture: ComponentFixture<XuniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuniverseComponent, RouterOutletStubComponent ],
      providers: [{ provide: Router, useValue: RouterStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
