import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptot';
import { SpotifyAuthService } from './services/spotify-auth.service';
import { UserService } from './services/user.service';
import { tap } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: (spotifyAuthService: SpotifyAuthService, userService: UserService) =>
          () => spotifyAuthService.getAccessToken()
                .pipe(tap(token => userService.setToken(token))),
      deps: [SpotifyAuthService, UserService],
      multi: true
  }
  ]
};
