import { Component, OnInit } from '@angular/core';


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
  selector: 'app-formating-page',
  templateUrl: './formating-page.component.html',
  styleUrls: ['./formating-page.component.css']
})
export class FormatingPageComponent implements OnInit {

  card_one: style = { 'display': 'none' };
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

  constructor() { }

  ngOnInit(): void {
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

}
