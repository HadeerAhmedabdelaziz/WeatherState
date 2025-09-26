import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Weather } from "./weather.model";
import * as WeatherActions from './weather.actions';

export const weatherFeaturekey = 'weather';


export interface WeatherState {
  weather : Weather | null;
  loading : boolean;
  error : string | null;
}

export const initialState :WeatherState = {
  weather : null,
  loading : false,
  error : null
}

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, state => ({
    ...state,
    loading : true
  })),

  on(WeatherActions.loadWeatherSuccess, (state, {weather}) => ({
    ...state,
    loading : false,
    weather : weather
  })),

    on(WeatherActions.loadWeatherFailure, (state, {error}) => ({
    ...state,
    loading : false,
    error : error,
  }))
)


