import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IWheaterInfo } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  weatherInfo = new Subject<IWheaterInfo>();

  constructor() { }

  /**
   * An observable whose subscribe method has an object with the information of
   * the weather in a city. Said object is undefined if the city does not exists. 
   */
  getWheaterInfo(): Observable<IWheaterInfo> {
    return this.weatherInfo.asObservable();
  }

  /**
   * Searches the weather of a specific city.
   * 
   * @param cityName The name of the city.
   */
  searchCity(cityName: string): void {
    const appId = 'b9ae67e8c1f57121b15cddf6b8d30f72';
    const url = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=${appId}`;

    fetch(url, { mode: 'cors' })
      .then((response: Response) => {
        return response.json();
      })
      .then((response) => {
        let weatherInfo = response.list[0];
        if (weatherInfo) {
          weatherInfo = this.fileterInfo(weatherInfo);
        }
        this.weatherInfo.next(weatherInfo);
      })
      .catch((error) => {
        this.weatherInfo.error(error);
      });
  }

  /**
   * Extracts the important information from the one sent by the weather API.
   * 
   * @param weatherInfo All the information sent by the weather API.
   */
  private fileterInfo(weatherInfo): IWheaterInfo {
    return <IWheaterInfo>{
      cityName: weatherInfo.name,
      description: weatherInfo.weather[0].description,
      humidity: weatherInfo.main.humidity,
      iconSrc: `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`,
      temperature: weatherInfo.main.temp,
      windSpeed: weatherInfo.wind.speed,
    }
  }
}
