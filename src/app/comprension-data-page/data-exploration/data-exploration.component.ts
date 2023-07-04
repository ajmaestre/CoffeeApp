import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-exploration',
  templateUrl: './data-exploration.component.html',
  styleUrls: ['./data-exploration.component.css']
})
export class DataExplorationComponent implements OnInit {

  modal_s_opened: boolean = false;
  modal_k_opened: boolean = false;
  modal_p_opened: boolean = false;

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

}
