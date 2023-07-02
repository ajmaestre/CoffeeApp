import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreparationDataPageService {

  constructor(private http: HttpClient) { }

  getDataInZero(): Observable<any>{
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/data-zeros`).pipe(
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
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/data-outliders`).pipe(
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
