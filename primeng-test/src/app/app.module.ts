import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';     
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './component/student-form/student-form.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';

import { SelectButtonModule } from 'primeng/selectbutton';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
