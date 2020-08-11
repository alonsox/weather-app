import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { WeatherService } from '../core/weather.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {

  errorMessage = '';
  cityInfo = new FormGroup({
    cityName: new FormControl('', [Validators.required]),
  });

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.cityInfo.valid) {
      this.errorMessage = '';
      this.weatherService.searchCity(this.cityInfo.value.cityName);
    } else {
      this.errorMessage = 'Enter the name of a city';
    }
  }
}
