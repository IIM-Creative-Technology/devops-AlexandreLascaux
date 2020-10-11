import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCityComponent } from './button-city/button-city.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FollowingWeatherComponent } from './following-weather/following-weather.component';
import { GraphicComponent } from './graphic/graphic.component';
import { GraphicLineMultiComponent } from './graphic-line-multi/graphic-line-multi.component';
import { GraphicPieComponent } from './graphic-pie/graphic-pie.component';
import { MapCityComponent } from './map-city/map-city.component';
import { WaterInfoComponent } from './water-info/water-info.component';
import { WindGraphComponent } from './wind-graph/wind-graph.component';
import { RouterModule, Route } from '@angular/router';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ButtonCityComponent,
    CurrentWeatherComponent,
    FollowingWeatherComponent,
    GraphicComponent,
    GraphicLineMultiComponent,
    GraphicPieComponent,
    MapCityComponent,
    WaterInfoComponent,
    WindGraphComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ButtonCityComponent,
    CurrentWeatherComponent,
    FollowingWeatherComponent,
    GraphicComponent,
    GraphicLineMultiComponent,
    GraphicPieComponent,
    MapCityComponent,
    WaterInfoComponent,
    WindGraphComponent
  ]
})
export class SharedModule { }
