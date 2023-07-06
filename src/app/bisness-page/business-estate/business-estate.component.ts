import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';


interface modal_type{
  title: string;
  content: string[];
}

@Component({
  selector: 'app-business-estate',
  templateUrl: './business-estate.component.html',
  styleUrls: ['./business-estate.component.css']
})
export class BusinessEstateComponent implements OnInit {

  modal_one: modal_type = {

      title: 'Diseño de Patrones de Estratificación de Cultivos en el Departamento del Huila Colombia, Minería de Datos para una Agricultura de Precisión.',

      content: [`Entre los artículos analizados encontramos que una de ellos 
        aplicaba la metodología CRISP-DM para el desarrollo del proyecto 
        en minería de datos. Este artículo explica el desarrollo de los patrones 
        de estratificación de los cultivos en el departamento del Huila por medio 
        de la metodología CRISP-DM, con el desarrollo de las siguientes etapas:`,

      `-  Compresión del negocio.
      `,

      `-  Compresión de datos.`,

      `-  Preparación de los datos.`,

      `-  Modelado.`,

      `-  Evaluación.`,

      `El diseño de patrones para la estratificación de cultivos 
        por medio del uso de la metodología CRISP-DM, les permitió realizar 
        una planificación de las áreas a ser sembradas en cada municipio del 
        Huila de acuerdo a sus potencialidades, contribuyendo a regular 
        la oferta y demanda de los productos sembrados.`]

  }

  modal_two: modal_type = {
    title: 'Predicción del rendimiento de cultivos agrícolas usando aprendizaje automático',
    content: [
      `Uno de estos artículos se enfocaba en la predicción del rendimiento de 
        cultivos agrícolas usando aprendizaje automático. En este artículo 
        abordaban la predicción del rendimiento de los cultivos a través del 
        aprendizaje automático usando dos variables predictoras: hectáreas cosechadas, 
        y producción en toneladas.`,

        `Para el primer caso, usaron una arquitectura de 
        red neuronal densa (DNN), seguido de los Random Forest (RF), árboles de decisión (AD), 
        y para terminar máquinas de soporte vectorial (SVM). Finalmente concluyeron que el mejor 
        modelo fue el de los RF, seguidos de AD, DNN, y por ultimo SVM.`
    ]
  }

  modal_three: modal_type = {
    title: 'Predicción del rendimiento y la calidad de tres gramíneas en el valle del cauto',
    content: [
      `Otro artículo interesante analizaba la predicción del rendimiento y 
        la calidad de tres gramíneas en el Valle del Cauto, en Cuba. 
        En este artículo se explica que para el proceso de aprendizaje se 
        utilizó la herramienta Neural Network de Matlab 2013b. Además, 
        se escogió la arquitectura de tipo Perceptrón Multicapa, 
        donde se emplea el aprendizaje de tipo supervisado, con los algoritmos 
        de entrenamiento backpropagation y de ajuste de pesos Levenberg-Marquardt.`
    ]
  }

  modal_four: modal_type = {
    title: 'Predicción y diversificación de cultivos para Nuevo León, México',
    content: [
      `Para terminar otro artículo que capto nuestra atención estaba 
        enfocado en la predicción y diversificación de cultivos para Nuevo León, México. 
        En este artículo se explicaba la generación de modelos a partir de diversas 
        bases de datos, y mapas temáticos a una misma escala de observación para ubicar 
        zonas con potencial productivo de 16 cultivos con valor económico en el mercado nacional 
        y estratégico para el estado de Nuevo León.`,

      `En este artículo se explica también 
        como utilizaron vectorización digital de las áreas agrícolas bajo la plataforma Google Earth Pro; 
        uso de bases de datos climáticos, edáficos y requerimientos del cultivo; 
        interpolación de resultados sobre mapas temáticos; extracción de polígonos de 
        áreas agrícolas a través de algebra de mapas; e integración de bases de datos 
        del rendimiento potencial con mapas temáticos de áreas agrícolas.`
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
