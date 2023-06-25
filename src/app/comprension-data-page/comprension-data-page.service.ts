import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprensionDataPageService {

  BASE_URL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getResumeStatistic(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/data-comprension/resume-statistic`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getMinsingData(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/data-comprension/mising-data`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getAllDataInZero(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/data-comprension/all-data-zeros`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }


}
