import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromWeather from './weather.reducer';

export const selectWeatherState = createFeatureSelector<fromWeather.WeatherState>(fromWeather.weatherFeaturekey);

export const selectWeather = createSelector(
selectWeatherState,
state => state.weather
);

export const selectLoading = createSelector(
selectWeatherState,
state => state.loading
);

export const selectError = createSelector(
selectWeatherState,
state => state.error
);


