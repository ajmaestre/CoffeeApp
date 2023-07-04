import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { IndexPageService } from './index-page.service';



@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule
  ],
  providers: [IndexPageService]
})
export class IndexPageModule { }
