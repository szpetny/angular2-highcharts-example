/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XformComponent } from './xform.component';

describe('XformComponent', () => {
  let component: XformComponent;
  let fixture: ComponentFixture<XformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XformComponent ]
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
  });
});
