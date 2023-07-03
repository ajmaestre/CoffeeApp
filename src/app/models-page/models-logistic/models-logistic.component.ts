import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModelsPageService } from '../models-page.service';
import { Subscription } from 'rxjs';
import { misingData } from 'src/app/interfaces/misingData';

interface IPrediction { response: string; }


@Component({
  selector: 'app-models-logistic',
  templateUrl: './models-logistic.component.html',
  styleUrls: ['./models-logistic.component.css']
})
export class ModelsLogisticComponent implements OnInit, OnDestroy {

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
  style_hight = {
    'background-color': '#afafaf'
  };
  style_low = {
    'background-color': '#afafaf'
  };

  constructor(private modelService: ModelsPageService) { }

  ngOnInit(): void {
    this.getListDept();
  }

  getPrediction(){
    this.predictionSubscription = this.modelService.getPredictionLogistic(this.dataDescrive).subscribe({
      next: (res: IPrediction) => {
        if(res.response == 'Alta'){
          this.style_hight = {
            'background-color': '#6e13bd'
          }
          this.style_low = {
            'background-color': '#afafaf'
          };
        }else if(res.response == 'Baja'){
          this.style_low = {
            "background-color": '#6e13bd'
          }
          this.style_hight = {
            'background-color': '#afafaf'
          };
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
