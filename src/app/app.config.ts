import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpResponse, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptot';
import { SpotifyAuthService } from './services/spotify-auth.service';
import { UserService } from './services/user.service';
import { firstValueFrom, tap } from 'rxjs';
import { response } from 'express';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor]), withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: (spotifyAuthService: SpotifyAuthService) =>
        () => firstValueFrom(spotifyAuthService.checkAuthentication()),
      deps: [SpotifyAuthService],
      multi: true
    },
  ]
};
