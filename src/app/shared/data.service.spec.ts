/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DataService } from './data.service';
import { TestData } from '../testing/test-data';
import { Observable } from 'rxjs/Rx';

describe('Service: Data', () => {
  const mockResponse = TestData.xchartData();

  let serverport = 'server:port',
    filename = 'filename';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DataService,
        { provide: XHRBackend, useClass: MockBackend },
        BaseRequestOptions
      ]
    });
  });

  it('should do getXchartData and return Observable<number[][][]> without range',
    inject([DataService, XHRBackend], (service, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toEqual('http://server:port/filename/main/web');
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      service.getXchartData(serverport, filename).subscribe((data) => {
        expect(data.length).toEqual(2);
        expect(data[0]).toBeDefined();
        expect(data[1]).toBeDefined();
        expect(data[0][0].length).toEqual(2);
        expect(data[1][0].length).toEqual(3);
      });
    })
  );

  it('should do getXchartData and return Observable<number[][][]> with range',
    inject([DataService, XHRBackend], (service, mockBackend) => {
      let min = 1, max = 2;
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toEqual(`http://server:port/filename/main/web?min=${min}&max=${max}`);
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: JSON.stringify(mockResponse)
        })));
      });
      service.getXchartData(serverport, filename, min, max).subscribe((data) => {
        expect(data.length).toEqual(2);
        expect(data[0]).toBeDefined();
        expect(data[1]).toBeDefined();
        expect(data[0][0].length).toEqual(2);
        expect(data[1][0].length).toEqual(3);
      });
    })
  );

  it('should do getXchartData and return error',
    async(inject([DataService, XHRBackend], (service, mockBackend) => {
      let min = 1, max = 2;
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toEqual(`http://server:port/filename/main/web?min=${min}&max=${max}`);
        connection.mockRespond(new Response(new ResponseOptions({
          status: 500,
          body: '{error: }',
          type: 3,
          statusText: 'ERROR'
        })));
      });
      spyOn(Observable, 'throw');
      service.getXchartData(serverport, filename, min, max).subscribe((err) => {
        expect(Observable.throw).toHaveBeenCalledWith('Unexpected token e in JSON at position 1');
      });
    })
    ));

  it('should do getXchartData and return error 2',
    async(inject([DataService, XHRBackend], (service, mockBackend) => {
      let min = 1, max = 2,
        errorResponse = new Response(new ResponseOptions({
          status: 404,
          body: {},
          type: 3,
          statusText: 'ERROR'
        }));
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toEqual(`http://server:port/filename/main/web?min=${min}&max=${max}`);
        connection.mockError(errorResponse);
      });
      spyOn(Observable, 'throw');
      service.getXchartData(serverport, filename, min, max).subscribe((err) => {
        expect(Observable.throw).toHaveBeenCalledWith(errorResponse);
      });
    })
    ));

  it('should do getXchartDataFromJson and return Observable<number[][][]>',
    inject([DataService, XHRBackend], (service, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toEqual('../../assets/json/test-long.json');
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      service.getXchartDataFromJson().subscribe((data) => {
        expect(data.length).toEqual(2);
        expect(data[0]).toBeDefined();
        expect(data[1]).toBeDefined();
        expect(data[0][0].length).toEqual(2);
        expect(data[1][0].length).toEqual(3);
      });
    })
  );
});
