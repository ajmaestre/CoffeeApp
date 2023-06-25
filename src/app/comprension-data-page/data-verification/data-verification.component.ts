import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComprensionDataPageService } from '../comprension-data-page.service';
import { Subscription } from 'rxjs';
import { numberAtributes } from 'src/app/interfaces/numberAtributes';
import { misingData } from 'src/app/interfaces/misingData';

@Component({
  selector: 'app-data-verification',
  templateUrl: './data-verification.component.html',
  styleUrls: ['./data-verification.component.css']
})
export class DataVerificationComponent implements OnInit, OnDestroy {

  misingSubscription!: Subscription;
  dataZeroSubscription!: Subscription;
  numAtr: misingData = {};
  dataZero!: misingData;

  constructor(private comprensionService: ComprensionDataPageService) { }

  ngOnInit(): void {
    this.getMisingData();
    this.getDataInZero();
  }

  getMisingData(){
    this.misingSubscription = this.comprensionService.getMinsingData().subscribe({
      next: (res) => {
        this.numAtr = res;
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }

  getDataInZero(){
    this.dataZeroSubscription = this.comprensionService.getAllDataInZero().subscribe({
      next: (res) => {
        this.dataZero = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.misingSubscription.unsubscribe();
    this.dataZeroSubscription.unsubscribe();
  }

}
