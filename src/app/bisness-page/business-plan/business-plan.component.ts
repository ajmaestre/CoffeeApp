import { Component, OnInit } from '@angular/core';


interface   style {
  'position'?: string;
  'left'?: string;
  'top'?: string;
  'transform'?: string;
  'z-index'?: string;
}

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.css']
})
export class BusinessPlanComponent implements OnInit {

  card_one: style = {};
  card_two: style = {};
  card_three: style = {};
  card_four: style = {};
  card_five: style = {};
  card_six: style = {};
  card_seven: style = {};
  show_style: boolean = false;
  style_card: style = {
    'position': 'fixed',
    'left': '40%',
    'top': '40%',
    'transform': 'scale(1.5)',
    'z-index': '4',
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

  constructor() { }

  ngOnInit(): void {
  }

  load_style_one(){
    if(this.show_style){
      this.show_style = false;
      this.card_one = {};
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
      this.card_two = {};
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
      this.card_three = {};
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
      this.card_four = {};
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
      this.card_five = {};
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_five = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  load_style_six(){
    if(this.show_style){
      this.show_style = false;
      this.card_six = {};
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_six = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

  load_style_seven(){
    if(this.show_style){
      this.show_style = false;
      this.card_seven = {};
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_seven = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

}
