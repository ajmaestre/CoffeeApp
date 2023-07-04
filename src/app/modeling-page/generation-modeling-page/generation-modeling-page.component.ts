import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generation-modeling-page',
  templateUrl: './generation-modeling-page.component.html',
  styleUrls: ['./generation-modeling-page.component.css']
})
export class GenerationModelingPageComponent implements OnInit {

  open_modal_eject: boolean = false;
  open_modal_desc: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  load_modal_eject(){
    if(this.open_modal_eject){
      this.open_modal_eject = false;
    }else{
      this.open_modal_eject = true;
    }
  }

  load_modal_desc(){
    if(this.open_modal_desc){
      this.open_modal_eject = false;
    }else{
      this.open_modal_eject = true;
    }
  }

}
