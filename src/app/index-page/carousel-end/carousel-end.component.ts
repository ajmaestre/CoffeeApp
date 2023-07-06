import { Component, OnInit } from '@angular/core';
import { modal_type } from 'src/app/interfaces/modalType';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-carousel-end',
  templateUrl: './carousel-end.component.html',
  styleUrls: ['./carousel-end.component.css']
})
export class CarouselEndComponent implements OnInit {
  
  modal_one: modal_type = {
    title: 'Modelado',
    content: [
      `En esta fase de la metodología se escogerá la técnica (o técnicas) 
      más apropiadas para los objetivos marcados de la minería de datos. 
      A continuación, y una vez realizado un plan de prueba para los modelos escogidos, 
      se procederá a aplicar dichas técnicas sobre los datos para generar 
      el modelo y por último se tendrá que evaluar si dicho modelo ha cumplido 
      los criterios de éxito o no.`
    ]
  }

  modal_two: modal_type = {
    title: 'Evaluación',
    content: [
      `En esta etapa, después de la construcción de los modelos, 
      observaremos los resultados que estos arrojan para realizar una comparación entre estos y
      aplicaremos diferentes métricas adecuadas para cada modelo en particular con el fin de evaluarlos.`
    ]
  }

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  load_modal(modal_opened: modal_type){
    this.modalService.title_modal = modal_opened.title;
    this.modalService.content_modal = modal_opened.content;
    this.modalService.open_modal = true;
  }

}
