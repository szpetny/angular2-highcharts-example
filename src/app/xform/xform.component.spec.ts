/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { XformComponent } from './xform.component';

describe('XformComponent', () => {
  let component: XformComponent;
  let fixture: ComponentFixture<XformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XformComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.serverSettings).toBeDefined();
  });
});
