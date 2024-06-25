import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyAuthService } from '../spotify-auth.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  /* private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  }); */

  private access_token;
  private readonly _baseUrl = '/serverApi/me';

  constructor(private http: HttpClient, private spotifyService: SpotifyAuthService, private userService: UserService) {
    this.spotifyService.getAccessToken().subscribe(token => this.userService.setToken(token));
    this.access_token = this.userService.getToken();
  }
  

  getUserData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_token}`,
      'Content-Type': 'application/json',
    });
    
    return this.http.get(`${this._baseUrl}/getData`, { headers });

  }


}
