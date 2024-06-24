import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private access_token: string | null | undefined;

  private readonly _baseUrl: string = '/me'

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.access_token = localStorage.getItem('access_token');
      console.log(this.access_token);
    } else {
      console.log('Not running in a browser environment');
    }
  }

  getUserData(): Observable<any> {
    
    this.access_token = this.getToken();
/*     console.log(this.access_token);
 */    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_token}`,
    });
  
    return this.http.get('https://api.spotify.com/v1/me', { headers });
  }
  getToken(){
    return this.access_token;
  }

  setToken(token: string){
    this.access_token = token;
  }
}