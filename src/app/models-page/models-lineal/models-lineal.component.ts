import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { misingData } from 'src/app/interfaces/misingData';
import { ModelsPageService } from '../models-page.service';

@Component({
  selector: 'app-models-lineal',
  templateUrl: './models-lineal.component.html',
  styleUrls: ['./models-lineal.component.css']
})
export class ModelsLinealComponent implements OnInit, OnDestroy {

  predictionSubscription!: Subscription;
  listDeptSubscription!: Subscription;
  listMunDescription!: Subscription;
  codeDeptSubscription!: Subscription;
  codeMunSubscription!: Subscription;
  prediction!: string;
  dataDescrive: misingData = {};
  depts = [];
  muns = [];
  deptSelected: string = 'departamento';
  munSelected: string = 'municipio';
  style_title = {
    'background-color': '#666'
  };
  style_prediction = {
    'background-color': '#afafaf'
  };

  constructor(private modelService: ModelsPageService) { }

  ngOnInit(): void {
    this.getListDept();
  }

  getPrediction(){
    this.predictionSubscription = this.modelService.getPredictionLineal(this.dataDescrive).subscribe({
      next: (res) => {
        this.prediction = res.response;
        this.style_prediction = {
          'background-color': '#6e13bd'
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getListDept(){
    this.listDeptSubscription = this.modelService.getListDept().subscribe({
      next: (res) => {
        this.depts = res.municipio;     
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  selectDept(){
    this.getListMun();
  }

  selectMun(){
    this.getCodeDept();
    this.getCodeMun();
  }

  getListMun(){
    this.listMunDescription = this.modelService.getListMun(this.deptSelected).subscribe({
      next: (res) => {
        this.muns = res.departamento;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCodeDept(){
    this.codeDeptSubscription = this.modelService.getCodeDept(this.deptSelected).subscribe({
      next: (res) => {
        for(let key in res.departamento){
          this.dataDescrive.c_d_dep = Number(key);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCodeMun(){
    this.codeMunSubscription = this.modelService.getCodeMun(this.munSelected).subscribe({
      next: (res) => {
        for(let key in res.municipio){
          this.dataDescrive.c_d_mun = Number(key);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.predictionSubscription.unsubscribe();
    this.listDeptSubscription.unsubscribe();
    this.listMunDescription.unsubscribe();
    this.codeDeptSubscription.unsubscribe();
    this.codeMunSubscription.unsubscribe();
  }

}
