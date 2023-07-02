import { Component, OnInit } from '@angular/core';
import { ModalImgService } from './modal-img.service';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {

  style_img = {};

  constructor(public modalImgService: ModalImgService) {}

  ngOnInit(): void {
    
  }

  loadImg(){
    console.log(this.modalImgService.url_image);
    this.style_img = {
      'background-image': `url(../../assets/images/${this.modalImgService.url_image})`
    };
  }

}
