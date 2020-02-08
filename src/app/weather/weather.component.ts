import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.getWeathers();
  }

  getWeathers(){
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(Response => {
      this.weathers = Response;
    }, error =>{
      console.log(error);
    });
  }

}
