import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComprensionDataPageService } from '../comprension-data-page.service';
import { Subscription } from 'rxjs';
import { numberAtributes } from 'src/app/interfaces/numberAtributes';

@Component({
  selector: 'app-data-description',
  templateUrl: './data-description.component.html',
  styleUrls: ['./data-description.component.css']
})
export class DataDescriptionComponent implements OnInit, OnDestroy {

  resumeSubscription!: Subscription;
  numAtr: numberAtributes = {};

  constructor(private comprensionService: ComprensionDataPageService) { }

  ngOnInit(): void {
    this.getResumeStatistic();
  }

  getResumeStatistic(){
    this.resumeSubscription = this.comprensionService.getResumeStatistic().subscribe({
      next: (res) => {
        this.numAtr = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.resumeSubscription.unsubscribe();
  }

}
