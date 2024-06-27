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
import { TrackService } from './services/track.service';
import { ArtistService } from './services/artist.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor]), withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: (spotifyAuthService: SpotifyAuthService, userService: UserService, trackService: TrackService, artistService: ArtistService) =>
        () => spotifyAuthService.checkAuthentication()
          .pipe(
            tap(token => {
              userService.setToken(token);
              trackService.setToken(token);
              artistService.setToken(token);
            }),
          ),
      deps: [SpotifyAuthService, UserService, TrackService, ArtistService],
      multi: true
    },
  ]
};
