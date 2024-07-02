import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptot';
import { SpotifyAuthService } from './services/spotify-auth.service';
import { UserService } from './services/user.service';
import { tap } from 'rxjs';
import { TrackService } from './services/track.service';
import { ArtistService } from './services/artist.service';
import { DashboardService } from './services/dashboard.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor]), withFetch()),
    {
      // When the application is initialized it calls the method the check the authentication and eventually redirect to the spotify authentication page
      provide: APP_INITIALIZER,
      useFactory: (spotifyAuthService: SpotifyAuthService, userService: UserService, trackService: TrackService, artistService: ArtistService, dashboardService: DashboardService) =>
        () => spotifyAuthService.checkAuthentication()
          .pipe(
            tap(token => {

              // Passign the token value between the main services to always have it in the api calls
              userService.setToken(token);
              trackService.setToken(token);
              artistService.setToken(token);
              dashboardService.setToken(token);
            }),
          ),
      deps: [SpotifyAuthService, UserService, TrackService, ArtistService, DashboardService],
      multi: true
    },
  ],
  
};
