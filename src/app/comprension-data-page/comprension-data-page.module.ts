import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprensionDataPageComponent } from './comprension-data-page.component';
import { ComprensionDataPageService } from './comprension-data-page.service';



@NgModule({
  declarations: [ComprensionDataPageComponent],
  imports: [
    CommonModule
  ],
  providers: [ComprensionDataPageService]
})
export class ComprensionDataPageModule { }
