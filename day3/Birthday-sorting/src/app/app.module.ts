import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatTableModule } from "@angular/material/table";
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
