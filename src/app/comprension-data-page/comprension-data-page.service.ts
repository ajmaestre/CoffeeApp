import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComprensionDataPageService {

  constructor(private http: HttpClient) { }

  getResumeStatistic(): Observable<any>{
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/resume-statistic`).pipe(
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
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/mising-data`).pipe(
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
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/all-data-zeros`).pipe(
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
