import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getXchartDataFromJson(): Observable<number[][][]> {
    return this.http.get('../../assets/json/test-long.json')
      .map((r: Response) => r.json() as number[][][])
      .catch((error: any) => {
        this.handleError(error);
        return [];
      });
  }

  getXtableDataFromJson(): Observable<any[]> {
    return this.http.get('../../assets/json/table-data.json')
      .map((r: Response) => r.json())
      .catch((error: any) => {
        this.handleError(error);
        return [];
      });
  }

  getXchartData(serverport: string, filename: string,
    min?: number, max?: number): Observable<number[][][]> {
    let url = 'http://' + serverport + '/' + filename + '/main/web';
    if (min != null && max != null) {
      url += '?min=' + min + '&max=' + max;
    }
    return this.http.get(url)
      .map(
      (r: Response) => r.json() as number[][][]
      )
      .catch((error) => {
        this.handleError(error);
        return [];
      });
  }

  private handleError(error) {
    let message = 'Server error';
    if ((error.json instanceof Function) && error.json().error) {
      message = error.json().error;
    } else if (error.message) {
      message = error.message;
    } else if (error) {
      message = error;
    }
    Observable.throw(message);
  }
}
