import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreparationDataPageService {

  BASE_URL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getDataInZero(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/data-comprension/data-zeros`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getOutliders(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/data-comprension/data-outliders`).pipe(
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
