/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from '../shared/data.service';

import { DataServiceStub } from '../testing/service-stubs';
import { TestData } from '../testing/test-data';
import { AladinStub, A } from '../testing/aladin-stub';

import { XaladinComponent } from './xaladin.component';

//declare var A: any;

describe('XaladinComponent', () => {
  let component: XaladinComponent;
  let fixture: ComponentFixture<XaladinComponent>;
  let dataServiceStub, dataService, compDataService;
  let mocData;
 // let A = AladinStub.fakeA;
  let aladin = AladinStub.fakeAladin;

  beforeEach(async(() => {
    dataServiceStub = new DataServiceStub();
    
    TestBed.configureTestingModule({
      declarations: [ XaladinComponent ],
      providers: [{ provide: DataService, useValue: dataServiceStub }, { provide: A, useValue: A }]
    })
    .compileComponents();
  }));

  it('should init', () => {
    //spyOn(A, 'aladin').and.returnValue(aladin); 
    //spyOn(A, 'MOCFromJSON').and.returnValue(mocData);
    //spyOn(aladin, 'addMOC');
    
    fixture = TestBed.createComponent(XaladinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    dataService = fixture.debugElement.injector.get(DataService);
    compDataService = dataService;
    dataService = TestBed.get(DataService); 
    
    mocData = Observable.of(TestData.moc);
    spyOn(compDataService, 'getAladinDataFromJson').and.returnValue(mocData.moc);
    
   // expect(A.aladin).toHaveBeenCalled();
  });
});
