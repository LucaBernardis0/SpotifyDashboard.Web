import { Injectable, PLATFORM_ID, TransferState, inject, makeStateKey } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  private readonly clientId = '480eb2a6091f4a95892f638ade6228e5';
  private readonly redirect_uri = 'http://localhost:4200/';
  private readonly tokenUrl = 'https://accounts.spotify.com/api/token';

  platformId = inject(PLATFORM_ID);
  state = inject(TransferState);
  mykey = makeStateKey<string>('redirectUrl');

  private accessToken: string | undefined;
  private authenticationCompleted = false;
  private authenticationInProgress = false;

  private accessTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  getAuthCode(): string | undefined {
    this.authenticationInProgress = true;
    const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read user-library-read';
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: this.clientId,
      scope: scope,
      redirect_uri: this.redirect_uri,
    });
  
    const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
    console.log(params.toString());
    console.log(authUrl);
    if(window.location.hash.toString() == null || window.location.hash.toString() == '')
      window.location.href = authUrl;
    const urlParams = new URLSearchParams(window.location.hash);
    this.accessToken = urlParams.get('#access_token')?.toString();
    console.log(this.accessToken);
    return this.accessToken;
  }
  
  checkAuthentication(): Observable<string | undefined> {
    const urlParams = new URLSearchParams(window.location.hash);
    const accessToken = urlParams.get('#access_token')?.toString();
  
    if (accessToken == null || accessToken == '') {
      if (!this.authenticationInProgress) {
        this.authenticationInProgress = true;
        this.getAuthCode();
        return of(undefined);
      } else {
        return of(undefined);
      }
    } else {
      this.accessToken = accessToken;
      console.log(accessToken);
      return of(accessToken);
    }
  }

  getAccessToken(): Observable<string | null> {
    return this.accessTokenSubject.asObservable();
  }
}