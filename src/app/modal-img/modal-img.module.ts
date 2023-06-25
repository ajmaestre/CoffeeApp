import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalImgService } from './modal-img.service';
import { ModalImgComponent } from './modal-img.component';



@NgModule({
  declarations: [ModalImgComponent],
  imports: [
    CommonModule
  ],
  providers: [ModalImgService]
})
export class ModalImgModule { }
