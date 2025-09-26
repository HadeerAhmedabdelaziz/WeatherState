import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import * as fromEffects from './weather/weather.effects';
import * as fromreducer from './weather/weather.reducer';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
     provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideState(fromreducer.weatherFeaturekey, fromreducer.weatherReducer),
    provideEffects([fromEffects.WeatherEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
