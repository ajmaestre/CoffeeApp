import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { numberAtributes } from '../interfaces/numberAtributes';
import { misingData } from '../interfaces/misingData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelsPageService {

  constructor(private http: HttpClient) { }

  getPredictionLogistic(attrs: misingData): Observable<any>{
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/prediction/${attrs.c_d_dep}/${attrs.c_d_mun}/${attrs.a_o}/${attrs.rea_sembrada_ha}`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getPredictionLineal(attrs: misingData): Observable<any>{
    return this.http.get<any>(`${environment.BASE_URL}/data-etl/prediction-lineal/${attrs.c_d_dep}/${attrs.c_d_mun}/${attrs.a_o}/${attrs.rea_sembrada_ha}`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getListDept():Observable<any>{
    return this.http.get(`${environment.BASE_URL}/data-etl/list-department`).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getListMun(department: string):Observable<any>{
    return this.http.get(`${environment.BASE_URL}/data-etl/list-municipio/${department}`).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getCodeDept(department: string):Observable<any>{
    return this.http.get(`${environment.BASE_URL}/data-etl/code-department/${department}`).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getCodeMun(municipio: string):Observable<any>{
    return this.http.get(`${environment.BASE_URL}/data-etl/code-municipio/${municipio}`).pipe(
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
