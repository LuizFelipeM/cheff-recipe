import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StepComponent } from './step/step.component';
import { DescriptionComponent } from './description/description.component';
import { MainInformationComponent } from './main-information/main-information.component';
import { MethodComponent } from './method/method.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    MainInformationComponent,
    MethodComponent,
    StepComponent,
    CarouselComponent,
    IngredientComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }