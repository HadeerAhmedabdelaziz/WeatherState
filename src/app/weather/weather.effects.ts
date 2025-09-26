import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as loadActions from './weather.actions';
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActions.loadWeather),
      switchMap(({ city }) =>
        this.http
          .get<any>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8efc6db2112d0bfdd148cca13233ec0a&units=metric`
          )
          .pipe(
            delay(1000),
            map((res) =>
              loadActions.loadWeatherSuccess({
                weather: {
                  city: res.name,
                  temperature: res.main.temp,
                  humidity: res.main.humidity,
                  description: res.weather[0].description,
                },
              })
            ),
            catchError((err) =>
              of(
                loadActions.loadWeatherFailure({
                  error: err.message || "Failed to load the weather",
                })
              )
            )
          )
      )
    )
  );
}
