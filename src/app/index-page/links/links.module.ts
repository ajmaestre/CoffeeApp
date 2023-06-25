import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ObjetivesComponent } from '../objetives/objetives.component';



@NgModule({
  declarations: [ LinksComponent, IntroductionComponent, ObjetivesComponent ],
  imports: [
    CommonModule
  ]
})
export class LinksModule { }
