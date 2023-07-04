import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexPageService {

  constructor(private http: HttpClient) { }

  getHeadData(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/data-etl/head-data`).pipe(
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
