import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private _baseURL:string = '/artist';

  constructor(private http: HttpClient) { }

  getArtistData(): Observable<Artist>{
    return this.http.get<Artist>(this._baseURL + '/data');
  }

  getUserTopArtist(): Observable<Artist>{
    return this.http.get<Artist>(this._baseURL + '/topArtist');
  }

}
