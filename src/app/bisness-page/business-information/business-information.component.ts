import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  load_modal(){
    this.modalService.title_modal = 'Compilación de la información de la empresa';
    this.modalService.content_modal = [

      `En el 2009 la organización para la alimentación y 
        la agricultura de los Estados Unidos reportó que 
        la producción agrícola debe incrementar un 70% para sostener 
        una población que se espera exceda los 9 mil millones en el 2050. 
        Esta alerta sumada a los problemas causados por el cambio climático 
        compromete la seguridad alimentaria. Para mitigar el impacto causado, 
        los procesos agrícolas se deben apoyar en sistemas de análisis de datos más exhaustivos.`,

      `Uno de los mayores inconvenientes en este campo es 
        la predicción del rendimiento de un cultivo; el 
        rendimiento de un cultivo es una cantidad obtenida 
        en la cosecha que se mide en kilogramos por hectárea. 
        Este rendimiento se ve afectado por numerosas variables 
        que son difíciles de modelar por su complejidad y comportamiento no lineal. `,

      `Los factores involucrados en la predicción del rendimiento 
        en la producción agrícola están sujetos a variables culturales, 
        socio-económicas, a la disponibilidad hídrica y a características 
        particulares de su manejo y producción. La agricultura como un elemento 
        de gran importancia a nivel comercial está sujeta a riesgos que obligan 
        a buscar mecanismos predictivos con el objetivo de mejorar su rendimiento. `

    ];
    this.modalService.open_modal = true;
  }

}
