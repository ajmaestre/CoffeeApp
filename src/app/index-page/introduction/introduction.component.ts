import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  open_modal: boolean = false;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  load_modal(){
    if(this.open_modal){
      this.open_modal = false;
    }else{
      this.open_modal = true;
    }
  }


}
