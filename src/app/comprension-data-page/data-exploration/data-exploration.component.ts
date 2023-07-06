import { Component, OnInit } from '@angular/core';


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
  selector: 'app-data-exploration',
  templateUrl: './data-exploration.component.html',
  styleUrls: ['./data-exploration.component.css']
})
export class DataExplorationComponent implements OnInit {

  modal_s_opened: boolean = false;
  modal_k_opened: boolean = false;
  modal_p_opened: boolean = false;
  card_one: style = { 'display': 'none' };
  card_two: style = { 'display': 'none' };
  card_three: style = { 'display': 'none' };
  card_four: style = { 'display': 'none' };
  card_five: style = { 'display': 'none' };
  card_six: style = { 'display': 'none' };
  card_seven: style = { 'display': 'none' };
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
    'z-index': '1'
  };

  constructor() { }

  ngOnInit(): void {
  }

  open_modal_s(){
    if(this.modal_s_opened){
      this.modal_s_opened = false;
    }else{
      this.modal_s_opened = true;
    }
  }  
  
  open_modal_k(){
    if(this.modal_k_opened){
      this.modal_k_opened = false;
    }else{
      this.modal_k_opened = true;
    }
  }  
  
  open_modal_p(){
    if(this.modal_p_opened){
      this.modal_p_opened = false;
    }else{
      this.modal_p_opened = true;
    }
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

  load_style_six(){
    if(this.show_style){
      this.show_style = false;
      this.card_six = { 'display': 'none' };
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
      this.card_seven = { 'display': 'none' };
      this.style_back = {};
    }else{
      this.show_style = true;
      this.card_seven = this.style_card;
      this.style_back = this.style_back_load;
    }
  }

}
