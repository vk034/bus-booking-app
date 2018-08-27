import { Injectable } from '@angular/core';
import { BusList } from './iBusList';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BussesListService {

  // busListApi = 'http://127.0.0.1:58721/api/BusList';
  busListApi = 'api/bussesList';
  private searchData:Object;
  private searchDataSource = new BehaviorSubject<Object>(this.searchData);
  observeSearchData = this.searchDataSource.asObservable();

  constructor(private http: HttpClient) { }

  setSearchData(data:Object){
    this.searchData = data;
    this.searchDataSource.next(this.searchData);
  }

  getBusList(): Observable<BusList[]> {
    return this.http.get<BusList[]>(this.busListApi).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
  }

}
