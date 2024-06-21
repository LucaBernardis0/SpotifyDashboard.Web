import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private readonly _baseUrl: string = '/me'

  constructor(private http: HttpClient) { }

  getUserData(): Observable<User>{
    return this.http.get<User>(this._baseUrl + "/getData", { headers: this.httpHeaders });
  }
}
