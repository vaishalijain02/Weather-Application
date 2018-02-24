
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  constructor (
    private http: Http
  ) {}
	
  getWeather(key,city) {
	let path ='https://thingproxy.freeboard.io/fetch/http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key+'&units=metric';
	console.log("path:",path);
	return this.http.get(path).map(res => {
		 return res.json();
      });
	}

}