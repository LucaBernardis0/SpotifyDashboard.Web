import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private readonly _baseUrl = '/serverApi/me';

  constructor(private http: HttpClient, private userService: UserService) { }

  getUserData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this._baseUrl}/getData`, { headers });
  }
}