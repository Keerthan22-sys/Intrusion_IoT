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
  // Task 1: Declare your variable here

  // Task 4: Declare your variables here
  
  // Task 6: Declare your variables here

  // Task 7: Declare your variables here

  // Task 8: Declare your variables here


  constructor(private http: HttpClient, private datePipe: DatePipe) {}
  ngOnInit() {
    this.searchWeather();
  }

  searchWeather() {
    // Task 3: Select API URL here

    // Task 4: Add your logic here

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
