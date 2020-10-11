import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ChartsModule, 
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
