
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
 
})

export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  checkdata:boolean=false;
  spin:boolean=false;
  dataweather:any = [];
  srcImg:string;
  hours:any;
  minutes:any;
  color = 'primary';
  mode = 'indeterminate';
  value = 100;
  private Key = new FormControl('', [Validators.required]);
  private getErrorMessage() {
    return this.Key.hasError('required') ? 'You must enter a key' : '';
  }
  private Keycity = new FormControl('', [Validators.required]);
  private getErrorCityMessage() {
    return this.Keycity.hasError('required') ? 'You must enter a city' : '';
  }
   private addAPIKey(APIKey,city) {
	this.spin=true;
    this.srcImg ="";
    if (APIKey != "") {
     console.log("mykey and city:",APIKey,city);
	    this.weatherService.getWeather(APIKey,city).subscribe(
		data => this.dataweather = data,
		error => console.log("Error: ",error),
		() => 
		setTimeout(() => { 
		this.checkdata=true;
		this.spin=false;
		if(this.checkdata)
		this.srcImg =  "http://openweathermap.org/img/w/" + this.dataweather.weather[0].icon + ".png";
		let currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
		}, 1000)
		);	
    }
   }

  ngOnInit() {
  }

}
