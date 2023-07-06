import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreparationDataPageService } from '../preparation-data-page.service';
import { Subscription } from 'rxjs';
import { misingData } from 'src/app/interfaces/misingData';


interface   style {
  'display'?: string;
  'position'?: string;
  'left'?: string;
  'top'?: string;
  'transform'?: string;
  'z-index'?: string;
  'animation'?: string;
  'border-radius'?: string;
}

@Component({
  selector: 'app-cleaning-page',
  templateUrl: './cleaning-page.component.html',
  styleUrls: ['./cleaning-page.component.css']
})
export class CleaningPageComponent implements OnInit, OnDestroy {

  dataZeroSubscription!: Subscription;
  dataOutliderSubscription!: Subscription;

  dataZero: misingData = {};
  dataOutlider: misingData = {};

  card_one: style = { 'display': 'none' };
  card_two: style = { 'display': 'none' };
  card_three: style = { 'display': 'none' };
  card_four: style = { 'display': 'none' };
  card_five: style = { 'display': 'none' };
  show_style: boolean = false;
  style_card: style = {
    'display': 'block',
    'position': 'fixed',
    'left': '30%',
    'top': '30%',
    'transform': 'scale(2)',
    'z-index': '4',
    'animation': 'show-modal_img 1s ease normal',
    'border-radius': '10px'
  };
  style_back = {};
  style_back_load = {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100vw',
    'height': '100vh',
    'background-color': 'rgba(10, 10, 10, 0.4)',
    'z-index': '1'
  };

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

  load_style_five(){
    if(this.show_style){
      this.show_style = false;
      this.card_five = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_five = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  ngOnDestroy(): void {
    this.dataZeroSubscription.unsubscribe();
    this.dataOutliderSubscription.unsubscribe();
  }

}
