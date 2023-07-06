import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComprensionDataPageService } from '../comprension-data-page.service';
import { Subscription } from 'rxjs';
import { numberAtributes } from 'src/app/interfaces/numberAtributes';


interface   style {
  'display'?: string;
  'position'?: string;
  'left'?: string;
  'top'?: string;
  'transform'?: string;
  'z-index'?: string;
  'animation'?: string;
}

@Component({
  selector: 'app-data-description',
  templateUrl: './data-description.component.html',
  styleUrls: ['./data-description.component.css']
})
export class DataDescriptionComponent implements OnInit, OnDestroy {

  resumeSubscription!: Subscription;
  numAtr: numberAtributes = {};
  head: any[] = [];
  head_key: any[] = [];
  head_title: any[] = [];
  head_data: any[]= [];
  loading: boolean = true;
  card_one: style = { 'display': 'none' };
  card_two: style = { 'display': 'none' };
  card_three: style = { 'display': 'none' };
  card_four: style = { 'display': 'none' };
  show_style: boolean = false;
  style_card: style = {
    'display': 'block',
    'position': 'fixed',
    'left': '30%',
    'top': '30%',
    'transform': 'scale(2)',
    'z-index': '4',
    'animation': 'show-modal_img 1s ease normal'
  };
  style_back = {};
  style_back_load = {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100vw',
    'height': '100vh',
    'background-color': 'rgba(10, 10, 10, 0.4)',
    'z-index': '1',
  };

  constructor(private comprensionService: ComprensionDataPageService) { }

  ngOnInit(): void {
    this.getResumeStatistic();
  }

  getResumeStatistic(){
    this.resumeSubscription = this.comprensionService.getResumeStatistic().subscribe({
      next: (res) => {
        // this.numAtr = res;
        // this.loading = false;
        this.head_data = [];
        this.head_title = [];
        for(let key in res){
          let value = res[key];
          this.head_title.push(key);
          this.head = [];
          this.head_key = [];
          for(let val in value){
            this.head_key.push(val);
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

  load_style_one(){
    if(this.show_style){
      this.show_style = false;
      this.card_one = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_one = this.style_card;
      this.style_back = this.style_back_load;
    }
  }
  
  load_style_two(){
    if(this.show_style){
      this.show_style = false;
      this.card_two = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_two = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  load_style_three(){
    if(this.show_style){
      this.show_style = false;
      this.card_three = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_three = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  load_style_four(){
    if(this.show_style){
      this.show_style = false;
      this.card_four = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_four = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  ngOnDestroy(): void {
    this.resumeSubscription.unsubscribe();
  }

}
