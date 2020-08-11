import { Component, OnInit } from '@angular/core';

import { IWheaterInfo } from '../shared/interfaces';
import { WeatherService } from '../core/weather.service';

@Component({
  selector: 'app-wheater-info',
  templateUrl: './wheater-info.component.html',
  styleUrls: ['./wheater-info.component.css']
})
export class WheaterInfoComponent implements OnInit {

  errorMsg = '';
  weatherInfo: IWheaterInfo;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    this.weatherService.getWheaterInfo().subscribe(
      (info) => {
        this.weatherInfo = info;
        if (!this.weatherInfo) {
          this.errorMsg = 'City not found';
        }
      },
      (error) => {
        this.errorMsg = 'Could not connect to the server :(';
      })
  }

}
