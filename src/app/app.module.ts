import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LOCALE_ID } from "@angular/common/locales/global/en-IN";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { EligibilityCalculatorComponent } from './components/eligibility-calculator/eligibility-calculator.component';
import { CardComponent } from './components/common/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EligibilityCalculatorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en-IN" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
