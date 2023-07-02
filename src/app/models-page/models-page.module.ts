import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsPageService } from './models-page.service';
import { ModelsPageComponent } from './models-page.component';



@NgModule({
  declarations: [ModelsPageComponent],
  imports: [
    CommonModule
  ],
  providers: [ModelsPageService]
})
export class ModelsPageModule { }
