import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //model: any = {};
  registerMode = false;
  weathers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeathers();
  }
  // register() {
  //   console.log(this.model);
  // }

  // cancel() {
  //   console.log('canceled');
  // }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getWeathers(){
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(response => {
      this.weathers = response;
    }, error => {
      console.log(error);
    });
  }

}
