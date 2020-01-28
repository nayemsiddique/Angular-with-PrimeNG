import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { PanelModule } from "primeng/panel";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionModule } from "primeng/accordion";
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from "primeng/menu";
import { AllComponent } from './all/all.component';
import { ChartModule } from "primeng/chart";
import { DeshboardComponent } from './deshboard/deshboard.component';
    

@NgModule({
  declarations: [AppComponent, SettingsComponent, MenuComponent, AllComponent, DeshboardComponent],
  imports: [
    BrowserModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    MenuModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
