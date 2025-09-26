import { createAction, props } from "@ngrx/store";
import { Weather } from "./weather.model";

export const loadWeather = createAction(
  '[Weather] Load',
  props<{city : string}>()
);

export const loadWeatherSuccess = createAction(
  '[Weather] Load Success',
  props<{weather : Weather}>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Load Failure',
  props<{error : string}>()
);
