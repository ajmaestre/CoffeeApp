import { Component, OnInit, OnDestroy } from '@angular/core';
import { IndexPageService } from '../index-page.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.css']
})
export class ObjetivesComponent implements OnInit, OnDestroy {

  open_modal: boolean = false;
  headSubscription!: Subscription;
  head: any[] = [];
  head_title: any[] = [];
  head_data: any[]= [];
  loading: boolean = true;

  constructor(private indexService: IndexPageService) { }

  ngOnInit(): void {
  }

  getHeadData(){
    this.headSubscription = this.indexService.getHeadData().subscribe({
      next: (res) => {
        this.head_data = [];
        this.head_title = [];
        for(let key in res){
          let value = res[key];
          this.head_title.push(key);
          this.head = [];
          for(let val in value){
            this.head.push(value[val]);
          }
          this.head_data.push(this.head);
        }
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  load_modal(){
    this.getHeadData();
    if(this.open_modal){
      this.open_modal = false;
    }else{
      this.open_modal = true;
    }
  }

  ngOnDestroy(): void {
    this.headSubscription.unsubscribe();
  }

}
