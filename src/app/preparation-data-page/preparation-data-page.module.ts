import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparationDataPageService } from './preparation-data-page.service';
import { PreparationDataPageComponent } from './preparation-data-page.component';



@NgModule({
  declarations: [PreparationDataPageComponent],
  imports: [
    CommonModule
  ],
  providers: [PreparationDataPageService]
})
export class PreparationDataPageModule { }
