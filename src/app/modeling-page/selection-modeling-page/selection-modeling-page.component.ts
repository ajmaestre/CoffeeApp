import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';


interface modal_type{
  title: string;
  content: string[];
}


@Component({
  selector: 'app-selection-modeling-page',
  templateUrl: './selection-modeling-page.component.html',
  styleUrls: ['./selection-modeling-page.component.css']
})
export class SelectionModelingPageComponent implements OnInit {

  
  modal_one: modal_type = {

    title: 'Regresión lineal',

    content: [`
            La regresión lineal es una técnica de análisis de datos 
            que predice el valor de datos desconocidos mediante 
            el uso de otro valor de datos relacionado y conocido. 
            Modela matemáticamente la variable desconocida o dependiente 
            y la variable conocida o independiente como una ecuación lineal. 
            Por ejemplo, supongamos que tiene datos sobre sus gastos e ingresos del año pasado. 
            Las técnicas de regresión lineal analizan estos datos y determinan que tus gastos 
            son la mitad de tus ingresos. Luego calculan un gasto futuro desconocido 
            al reducir a la mitad un ingreso conocido futuro.
    `]

}

modal_two: modal_type = {
  title: 'Regresión logística',
  content: [
    `
            La regresión logística es una técnica de análisis de datos 
            que utiliza las matemáticas para encontrar las relaciones 
            entre dos factores de datos. Luego, utiliza esta relación 
            para predecir el valor de uno de esos factores basándose en el otro. 
            Normalmente, la predicción tiene un número finito de resultados, como un sí o un no.

            Por ejemplo, supongamos que desea adivinar si el visitante de 
            su sitio web va a hacer clic en el botón de pago de su carrito de compras o no. 
            El análisis de regresión logística analiza el comportamiento de los visitantes anteriores, 
            como el tiempo que permanecen en el sitio web y la cantidad de artículos que hay en el carrito. 
            Determina que, si anteriormente los visitantes pasaban más de cinco minutos 
            en el sitio y agregaban más de tres artículos al carrito, hacían clic en el botón de pago. 
            Con esta información, la función de regresión logística puede predecir 
            el comportamiento de un nuevo visitante en el sitio web.
    `
  ]
}

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  load_modal(modal: modal_type){
    this.modalService.title_modal = modal.title;
    this.modalService.content_modal = modal.content;
    this.modalService.open_modal = true;
  }

}
