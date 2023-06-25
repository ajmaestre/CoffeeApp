import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreparationDataPageService } from '../preparation-data-page.service';
import { Subscription } from 'rxjs';
import { misingData } from 'src/app/interfaces/misingData';

@Component({
  selector: 'app-cleaning-page',
  templateUrl: './cleaning-page.component.html',
  styleUrls: ['./cleaning-page.component.css']
})
export class CleaningPageComponent implements OnInit, OnDestroy {

  dataZeroSubscription!: Subscription;
  dataOutliderSubscription!: Subscription;

  dataZero!: misingData;
  dataOutlider!: misingData;

  constructor(private preparationService: PreparationDataPageService) { }

  ngOnInit(): void {
    this.getDataInZero();
    this.getOutliders();
  }

  getDataInZero(){
    this.dataZeroSubscription = this.preparationService.getDataInZero().subscribe({
      next: (res) =>{
        this.dataZero = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getOutliders(){
    this.dataOutliderSubscription = this.preparationService.getOutliders().subscribe({
      next: (res) => {
        this.dataOutlider = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.dataZeroSubscription.unsubscribe();
    this.dataOutliderSubscription.unsubscribe();
  }

}
