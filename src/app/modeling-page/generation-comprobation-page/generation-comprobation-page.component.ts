import { Component, OnInit } from '@angular/core';


interface modal_type{
  title?: string;
  content?: string[];
}

@Component({
  selector: 'app-generation-comprobation-page',
  templateUrl: './generation-comprobation-page.component.html',
  styleUrls: ['./generation-comprobation-page.component.css']
})
export class GenerationComprobationPageComponent implements OnInit {

  modal_one: modal_type = {

    title: 'Exactitud',

    content: [`
            Esta métrica indica el número de predicciones correctas 
            realizadas por el modelo sobre el número total de registros, 
            es decir, este indicador representa el porcentaje de predicciones correctas. 
            La mejor precisión es el 100%, lo que indica que todas las predicciones son correctas. 
            La exactitud se calcula de la siguiente manera:
    `],

  }

  
  modal_two: modal_type = {

    title: 'Precisión',

    content: [`
              Esta métrica evalúa el modelo por su desempeño en 
              cuanto a predicciones “positivas” e indica el porcentaje 
              de resultados positivos que son relevantes. Se calcula de la siguiente manera:
    `],

  }

  modal_three: modal_type = {

    title: 'Sensibilidad',

    content: [`
            Esta métrica se calcula como el número de predicciones 
            positivas correctas dividido por el número total de positivos, 
            es decir, indica el porcentaje de casos positivos clasificados correctamente. 
            Se calcula de la siguiente manera:
    `],

  }

  modal_four: modal_type = {

    title: 'Especificidad',

    content: [`
            Esta métrica se calcula como el número de predicciones 
            negativas correctas dividido por el número total de negativos:
    `],

  }

  modal_five: modal_type = {

    title: 'Error cuadrático medio (RMSE)',

    content: [`
            Esta métrica mide las diferencias entre los valores 
            pronosticados por el modelo y los valores reales a 
            partir de los cuales se ha creado el modelo. 
            El error cuadrático medio es una medida de la media de los 
            cuadrados de los errores. El error cuadrático 
            medio se calcula de la siguiente manera:
    `],

  }

  open_modal: boolean = false;
  modal_select: modal_type = {};

  constructor() { }

  ngOnInit(): void {
  }

  load_modal(modal: modal_type){
    if(this.open_modal){
      this.open_modal = false;
    }else{
      this.open_modal = true;
    }
    this.modal_select = modal;
  }  

}
