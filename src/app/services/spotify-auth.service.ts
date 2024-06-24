import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = '480eb2a6091f4a95892f638ade6228e5';
  private clientSecret = 'cd525cecdc4142f199756da2fe49ec9f'
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) { }

  getAccessToken(): Promise<string> {
    const authString = `${this.clientId}:${this.clientSecret}`;
    const base64AuthString = btoa(authString);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${base64AuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = new HttpParams()
     .set('grant_type', 'client_credentials');

     return lastValueFrom(
      this.http.post(this.tokenUrl, params, { headers })
       .pipe(
          map((response: any) => {
            /* console.log('Response:', response); */
            /* console.dir(response, { depth: null }); */ // <--- Add this line
            return response.access_token;
          }),
          catchError((error: HttpErrorResponse) => {
            console.error('Error getting access token:', error);
            throw error;
          })
        )
    );
  }
}