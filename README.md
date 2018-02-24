# Weather App

Weather Application is a simple component developed by using angular-cli and angular2 material Which will give the weather report
for the given location.

<p align="center"><img src="https://raw.githubusercontent.com/vaishalijain02/Weather-Application/master/img/Weather.PNG"></p>

### Note :
when user pass the city name as input user get weather info of that respective city using Http request ,but the user has to get his API key first as API key in this application is not static.
For your own API key ,visit https://openweathermap.org/ , sign up/sign in and copy your API key at https://home.openweathermap.org/api_keys

## Using the complete angular project
  ## Prerequisites
1. Install Node js
2. After installation of node js, on cmd:
   npm install -g @angular/cli

Download the weather report and install the required packages and run the application

Installing

```
>npm install
```
Run server

```
>ng serve
```

## Different Functionalities involved in this component

By using this component you can get weather details of a particular city.

```
<app-weather></app-weather>
```

json object consist of weather details like Temperature,Pressure,humidity and wind etc.

```
	getWeather(key,city) {
	let path ='SOME_PATH';
	console.log("path:",path);
	return this.http.get(path).map(res => {
		 return res.json();
      });
	}
```
  
Weather data is captured in the array dataweather
  ## dataweather

```
 this.weatherService.getWeather(APIKey,city).subscribe(
		data => this.dataweather = data,
		error => console.log("Error: ",error),
		() => 
		);	
```

## Angular2 material modules involved in this component

```
   <mat-form-field>
      <input 
        #addNew 
        matInput 
        [formControl]="Key" 
        required 
        placeholder="API KEY">
      <mat-hint>Type API key and press enter</mat-hint>
      <mat-error *ngIf="Key.invalid">{{getErrorMessage()}}</mat-error>
   </mat-form-field>
```
```
   <mat-progress-spinner *ngIf="spin"
        class="example-margin loader"
        [color]="color"
        [mode]="mode"
        [value]="value">
   </mat-progress-spinner>
```
```
   <mat-card class="card">
       <mat-card-title-group>
	   /* code here */
	   </mat-card-title-group>
   </mat-card>
```


