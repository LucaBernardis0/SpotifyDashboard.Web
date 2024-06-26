import { Injectable, PLATFORM_ID, TransferState, inject, makeStateKey } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  private readonly clientId = '480eb2a6091f4a95892f638ade6228e5';
  /* private clientSecret = 'cd525cecdc4142f199756da2fe49ec9f'; */
  private readonly redirect_uri = 'http://localhost:4200/';
  private readonly tokenUrl = 'https://accounts.spotify.com/api/token';

  platformId = inject(PLATFORM_ID);
  state = inject(TransferState);
  mykey = makeStateKey<string>('redirectUrl');

  private accessToken: string | null = null;
  private authenticationCompleted = false;
  private authenticationInProgress = false;

  constructor(private http: HttpClient) { }

  getAuthCode(): Observable<string> {
    this.authenticationInProgress = true;
    const scope = 'user-read-private user-read-email';
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: this.clientId,
      scope: scope,
      redirect_uri: this.redirect_uri,
    });

    const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
    console.log(params.toString());
    console.log(authUrl);
    window.location.href = authUrl;

    return of(authUrl);
  }

  checkAuthentication(): void {
    const urlParams = new URLSearchParams(window.location.hash);
    console.log(urlParams);
    const accessToken = urlParams.get('access_token');
    console.log(accessToken);

    if (accessToken == null || accessToken == '') {
      console.log(accessToken);
      this.getAuthCode();
    }
    else{
      console.log(accessToken);
    }
  }
}