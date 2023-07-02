import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BisnessPageComponent } from './bisness-page/bisness-page.component';
import { ComprensionDataPageComponent } from './comprension-data-page/comprension-data-page.component';
import { PreparationDataPageComponent } from './preparation-data-page/preparation-data-page.component';
import { ModelingPageComponent } from './modeling-page/modeling-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { IntroductionComponent } from './index-page/introduction/introduction.component';
import { ObjetivesComponent } from './index-page/objetives/objetives.component';
import { LinksComponent } from './index-page/links/links.component';
import { CarouselComponent } from './index-page/carousel/carousel.component';
import { CarouselEndComponent } from './index-page/carousel-end/carousel-end.component';
import { ResumeComponent } from './index-page/resume/resume.component';
import { LinksBpComponent } from './bisness-page/links-bp/links-bp.component';
import { BusinessHomeComponent } from './bisness-page/business-home/business-home.component';
import { BusinessObjetivesComponent } from './bisness-page/business-objetives/business-objetives.component';
import { BusinessInformationComponent } from './bisness-page/business-information/business-information.component';
import { BusinessDefinitionComponent } from './bisness-page/business-definition/business-definition.component';
import { BusinessDeterminationComponent } from './bisness-page/business-determination/business-determination.component';
import { BusinessEstateComponent } from './bisness-page/business-estate/business-estate.component';
import { ModalComponent } from './modal/modal.component';
import { BusinessPlanComponent } from './bisness-page/business-plan/business-plan.component';
import { LinksCdpComponent } from './comprension-data-page/links-cdp/links-cdp.component';
import { ComprensionHomeComponent } from './comprension-data-page/comprension-home/comprension-home.component';
import { DataRecopilationComponent } from './comprension-data-page/data-recopilation/data-recopilation.component';
import { DataDescriptionComponent } from './comprension-data-page/data-description/data-description.component';
import { DataExplorationComponent } from './comprension-data-page/data-exploration/data-exploration.component';
import { DataVerificationComponent } from './comprension-data-page/data-verification/data-verification.component';
import { ModalImgComponent } from './modal-img/modal-img.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LinksPdpComponent } from './preparation-data-page/links-pdp/links-pdp.component';
import { PreparationHomeComponent } from './preparation-data-page/preparation-home/preparation-home.component';
import { SelectionPageComponent } from './preparation-data-page/selection-page/selection-page.component';
import { CleaningPageComponent } from './preparation-data-page/cleaning-page/cleaning-page.component';
import { FormatingPageComponent } from './preparation-data-page/formating-page/formating-page.component';
import { ModelingHomeComponent } from './modeling-page/modeling-home/modeling-home.component';
import { LinksMpComponent } from './modeling-page/links-mp/links-mp.component';
import { SelectionModelingPageComponent } from './modeling-page/selection-modeling-page/selection-modeling-page.component';
import { GenerationModelingPageComponent } from './modeling-page/generation-modeling-page/generation-modeling-page.component';
import { GenerationComprobationPageComponent } from './modeling-page/generation-comprobation-page/generation-comprobation-page.component';
import { EvaluationModelingPageComponent } from './modeling-page/evaluation-modeling-page/evaluation-modeling-page.component';
import { LinksMspComponent } from './models-page/links-msp/links-msp.component';
import { ModelsHomeComponent } from './models-page/models-home/models-home.component';
import { ModelsLogisticComponent } from './models-page/models-logistic/models-logistic.component';
import { ModelsLinealComponent } from './models-page/models-lineal/models-lineal.component';
import { ModelsConclutionComponent } from './models-page/models-conclution/models-conclution.component';
import { LogoComponent } from './svg/logo/logo.component';
import { WwwComponent } from './svg/www/www.component';
import { CloudComponent } from './svg/cloud/cloud.component';
import { FixedComponent } from './svg/fixed/fixed.component';
import { CloudWhiteComponent } from './svg/cloud-white/cloud-white.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IndexPageComponent,
    BisnessPageComponent,
    ComprensionDataPageComponent,
    PreparationDataPageComponent,
    ModelingPageComponent,
    ModelsPageComponent,
    IntroductionComponent,
    ObjetivesComponent,
    LinksComponent,
    CarouselComponent,
    CarouselEndComponent,
    ResumeComponent,
    LinksBpComponent,
    BusinessHomeComponent,
    BusinessObjetivesComponent,
    BusinessInformationComponent,
    BusinessDefinitionComponent,
    BusinessDeterminationComponent,
    BusinessEstateComponent,
    ModalComponent,
    BusinessPlanComponent,
    LinksCdpComponent,
    ComprensionHomeComponent,
    DataRecopilationComponent,
    DataDescriptionComponent,
    DataExplorationComponent,
    DataVerificationComponent,
    ModalImgComponent,
    LinksPdpComponent,
    PreparationHomeComponent,
    SelectionPageComponent,
    CleaningPageComponent,
    FormatingPageComponent,
    ModelingHomeComponent,
    LinksMpComponent,
    SelectionModelingPageComponent,
    GenerationModelingPageComponent,
    GenerationComprobationPageComponent,
    EvaluationModelingPageComponent,
    LinksMspComponent,
    ModelsHomeComponent,
    ModelsLogisticComponent,
    ModelsLinealComponent,
    ModelsConclutionComponent,
    LogoComponent,
    WwwComponent,
    CloudComponent,
    FixedComponent,
    CloudWhiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
