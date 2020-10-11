import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoComponent } from './meteo.component';
import { MeteoRoutingModule } from './meteo-routing.module';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  declarations: [
    MeteoComponent
    ],
  imports: [CommonModule, MeteoRoutingModule, ChartsModule, SharedModule]
  })
export class MeteoModule {}
