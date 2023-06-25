import { Component, OnInit } from '@angular/core';
import { ModalImgService } from 'src/app/modal-img/modal-img.service';

interface moda_img_type {
  open_modal: boolean;
  title: string;
  url_image: string;
}

@Component({
  selector: 'app-data-exploration',
  templateUrl: './data-exploration.component.html',
  styleUrls: ['./data-exploration.component.css']
})
export class DataExplorationComponent implements OnInit {

  modal_spearman: moda_img_type = {
    open_modal: true,
    title: 'Matriz de correlación de Spearman',
    url_image: 'spearman.png'
  }

  modal_kendall: moda_img_type = {
    open_modal: true,
    title: 'Matriz de correlación de Kendall',
    url_image: 'kendall.png'
  }

  modal_pearson: moda_img_type = {
    open_modal: true,
    title: 'Matriz de correlación de Pearson',
    url_image: 'pearson.png'
  }

  constructor(public modalImgService: ModalImgService) { }

  ngOnInit(): void {
  }

  open_modal(modal_img: moda_img_type){
    this.modalImgService.title_modal = modal_img.title;
    this.modalImgService.url_image = modal_img.url_image;
    this.modalImgService.open_modal = modal_img.open_modal;
  }

}
