import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private readonly _baseUrl = '/serverApi/me';

  private httpheaders = new HttpHeaders({
    'Authorization': `Bearer ${this.userService.getToken()}`,
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private userService: UserService) { }

  getUserData(): Observable<any> {
    return this.http.get(`${this._baseUrl}/getData`, { headers: this.httpheaders });
  }

  getUserPlaylists(): Observable<any>{
    return this.http.get(`${this._baseUrl}/getPlaylists`, {headers: this.httpheaders});
  }
}