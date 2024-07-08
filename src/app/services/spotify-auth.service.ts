import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  
  // constant values for the authentication process 
  private readonly clientId = '480eb2a6091f4a95892f638ade6228e5';
  private readonly redirect_uri = 'http://localhost:4200/';


  // Shared token value
  private accessToken: string | undefined;
  private authenticationInProgress = false;
  private accessTokenSubject = new BehaviorSubject<string | null>(null);

  constructor() { }

  // Method to retrieve the authCode
  getAuthCode(): string | undefined {

    // check if the user is already authenticated
    this.authenticationInProgress = true;

    // setting the access scopes for the authenticated user
    const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read user-library-read';

    // setting the parameters for the http call
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: this.clientId,
      scope: scope,
      redirect_uri: this.redirect_uri,
    });
  
    const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

    // check if the user already authenticated
    if(window.location.hash.toString() == null || window.location.hash.toString() == '') // if its not than it redirects to the authentication page
      window.location.href = authUrl;
    const urlParams = new URLSearchParams(window.location.hash);

    // If the user is already autheticated, get the access_token value from the url params
    this.accessToken = urlParams.get('#access_token')?.toString();
    return this.accessToken;
  }
  
  // Check the user authentication
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
      return of(accessToken);
    }
  }

  getAccessToken(): Observable<string | null> {
    return this.accessTokenSubject.asObservable();
  }
}