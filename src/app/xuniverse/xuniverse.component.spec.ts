/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutletStubComponent, RouterStub } from '../testing/router-stubs';
import { HotkeysService, Hotkey, HotkeyOptions } from 'angular2-hotkeys';

import { XuniverseComponent } from './xuniverse.component';

describe('XuniverseComponent', () => {
  let component: XuniverseComponent;
  let fixture: ComponentFixture<XuniverseComponent>;
  let router: RouterStub;

  beforeEach(async(() => {
    router = new RouterStub();
    
    TestBed.configureTestingModule({
      declarations: [XuniverseComponent, RouterOutletStubComponent],
      providers: [{provide: Router, useValue: router}, 
                  {provide: HotkeyOptions, useValue: {}}, HotkeysService ],
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
  
  it('should navigate to xchart', () => {
    let data = {serverport: 'server:port', filename: 'file'};
    spyOn(router, 'navigate');
    component.updateServerSettings(data);
    expect(router.navigate).toHaveBeenCalledWith(['/xuniverse/xchart', data.serverport, data.filename]);
  });
});
