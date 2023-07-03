import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { BisnessPageComponent } from './bisness-page/bisness-page.component';
import { ComprensionDataPageComponent } from './comprension-data-page/comprension-data-page.component';
import { PreparationDataPageComponent } from './preparation-data-page/preparation-data-page.component';
import { ModelingPageComponent } from './modeling-page/modeling-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { IntroductionComponent } from './index-page/introduction/introduction.component';
import { ObjetivesComponent } from './index-page/objetives/objetives.component';


const routesOptions: ExtraOptions = {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 64],
}

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
                        { path: 'home', component: IndexPageComponent},
                        { path: 'bisness-comprension', component: BisnessPageComponent},
                        { path: 'data-comprension', component: ComprensionDataPageComponent},
                        { path: 'data-preparation', component: PreparationDataPageComponent},
                        { path: 'data-modeling', component: ModelingPageComponent},
                        { path: 'models', component: ModelsPageComponent},
                        { path: '**', redirectTo: 'home'}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
