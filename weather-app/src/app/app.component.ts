import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CurrentWeather } from './current-weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Weather-APP";
  // Task 1: Declare your variable here
  userInput: string = 'London';
  // Task 4: Declare your variables here
  $data!: Observable<CurrentWeather>;
  errorMessage: string = '';
  // Task 6: Declare your variables here

  // Task 7: Declare your variables here

  // Task 8: Declare your variables here


  constructor(private http: HttpClient, private datePipe: DatePipe) {}
  ngOnInit() {
    this.searchWeather();
  }

  searchWeather() {
    // Task 3: Select API URL here
 // Remove spaces from the user's input to simplify detection
 const sanitizedInput = this.userInput.replace(/\s+/g, '');
 const zipCodePattern = /^\d{5}(?:-\d{4})?$/; // ZIP code pattern // regex expression
 const isZipCode = zipCodePattern.test(this.userInput);
 // Construct the API URL based on the input type
 let queryParam: string = isZipCode? "zip" : "q"
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryParam}=${this.userInput}&units=metric&appid=${environment.key}`;
    // Task 4: Add your logic here
    this.errorMessage = ''
    this.$data = this.http.get(apiUrl).pipe(
      map((data: any) => {
        return {
          visibility: data.visibility,
          windSpeed: data.wind.speed,
          degTemp: data.main.temp,
          feelsLikeTemp: data.main.feels_like,
          name: data.name,
          dt: this.datePipe.transform(new Date(data.dt * 1000), 'medium'),
          description: data.weather[0].description,
          country: data.sys.country,
        };
      }),
      catchError((error) => {
        this.errorMessage = error.error.message;
 
        return throwError('An error occurred while fetching weather data.');
      })
    );
    // Task 6: Add your logic here

    // Task 8: Empty the date data here

    this.forcastWeather();
  }

  forcastWeather() {
    // Task 7: Add your code here

  }

  showTimeline(date: any) {
    // Task 8: Add your code here

  }

}
