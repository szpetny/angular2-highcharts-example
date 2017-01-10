/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TestData } from '../testing/test-data';
import { DataServiceStub } from '../testing/service-stubs';
import { DataService } from '../shared/data.service';

import { RouterLinkStubDirective } from '../testing/router-stubs';

import { XtableComponent } from './xtable.component';

declare var jQuery: any;

describe('XtableComponent', () => {
  let component: XtableComponent;
  let fixture: ComponentFixture<XtableComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let dataService, dataServiceStub, compDataService;
  let data;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    dataServiceStub = new DataServiceStub();

    TestBed.configureTestingModule({
      declarations: [XtableComponent, RouterLinkStubDirective],
      providers: [{ provide: DataService, useValue: dataServiceStub }]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(XtableComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    dataService = fixture.debugElement.injector.get(DataService);
    compDataService = dataService;
    dataService = TestBed.get(DataService);

    data = Observable.of(TestData.tableData.slice());
    spyOn(compDataService, 'getXtableDataFromJson').and.returnValue(data);

  //  de = fixture.debugElement.query(By.css('table.table'));
  //  el = de.nativeElement;

    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create', () => {
    expect(compDataService.getXtableDataFromJson).toHaveBeenCalled();
    expect(component).toBeTruthy();
   // expect(de).not.toBeNull();
  });

  it('get router links from template', () => {
    expect(links.length).toBe(2, 'should have 2 links');
    expect(links[0].linkParams).toBe('/xaladin', '1st link should go to x-aladin');
    expect(links[1].linkParams).toBe('/xuniverse', '2nd link should go to x-universe');
  });

  it('can click xaladin link in template', () => {
    const xaladinLinkDe = linkDes[0];
    const xaladinLink = links[0];

    expect(xaladinLink.navigatedTo).toBeNull('link should not have navigated yet');

    xaladinLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(xaladinLink.navigatedTo).toBe('/xaladin');
  });

  it('can click xuniverse link in template', () => {
    const xuniverseLinkDe = linkDes[1];
    const xuniverseLink = links[1];

    expect(xuniverseLink.navigatedTo).toBeNull('link should not have navigated yet');

    xuniverseLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(xuniverseLink.navigatedTo).toBe('/xuniverse');
  });
});
