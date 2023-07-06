import { Component, OnInit } from '@angular/core';
import { modal_type } from 'src/app/interfaces/modalType';
import { ModalService } from 'src/app/modal/modal.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  modal_one: modal_type = {

    title: 'Comprensión del negocio',

    content: [`
        En esta sección de la metodología CRISP-DM se hará un seguimiento 
        a todas las tareas en la minería de datos que tienen como finalidad 
        determinar los objetivos y requisitos del proyecto desde un punto de 
        vista comercial, con el propósito de transformarlos en objetivos 
        técnicos dentro de un plan de proyecto. 
    `]

  }

  modal_two: modal_type = {

    title: 'Comprensión de los datos',

    content: [`
        En esta etapa de la metodología CRISP-DM 
        se realizará la búsqueda y obtención inicial de los datos 
        respectivos para conformar una idea temprana del problema, 
        conocer a fondo los datos y evaluar su calidad, 
        como también establecer las posibles relaciones existentes entre ellos.  
    `]

  }

  modal_three: modal_type = {

    title: 'Preparación de los datos',

    content: [`
        En esta etapa de la metodología prepararemos los datos 
        para adecuarlos a las técnicas de minería de datos que se van 
        a emplear sobre ellos. Seleccionaremos aquellos datos que vamos 
        a utilizar para la construcción del modelo, realizaremos su 
        respectiva limpieza, añadiremos nuevos datos de ser necesario 
        y les daremos el formato adecuado para la fase de modelado. 
    `]

  }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    
  }

  load_modal(modal: modal_type){
    this.modalService.title_modal = modal.title;
    this.modalService.content_modal = modal.content;
    this.modalService.open_modal = true;
  }

}
