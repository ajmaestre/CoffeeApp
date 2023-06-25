import { Component, OnInit } from '@angular/core';
import { ModalImgService } from './modal-img.service';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {

  constructor(public modalImgService: ModalImgService) { }

  ngOnInit(): void {
  }

}
