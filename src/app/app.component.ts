import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelectors from './weather/weather.selectors';
import * as fromActions from './weather/weather.actions';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ngrx-weather-app';
  city = '';
  store = inject(Store);

  weather$ = this.store.select(fromSelectors.selectWeather);
  loading$ = this.store.select(fromSelectors.selectLoading);
  error$ = this.store.select(fromSelectors.selectError);

  getWeather(){
    this.store.dispatch(fromActions.loadWeather({city : this.city}));
  }


}
