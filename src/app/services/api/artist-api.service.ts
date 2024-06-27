import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../models/artist';
import { ArtistService } from '../artist.service';
import { Track } from '../../models/track';

@Injectable({
  providedIn: 'root'
})
export class ArtistApiService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.artistService.getToken()}`,
  });

  private _baseUrl:string = '/serverApi/artist';

  constructor(private http: HttpClient, private artistService: ArtistService) { }

/*   getArtistData(): Observable<Artist>{
    return this.http.get<Artist>(this._baseURL + '/data', {headers: this.httpHeaders});
  } */

  getUserTopArtist(): Observable<Artist>{
    return this.http.get<Artist>(this._baseUrl + '/topArtist', {headers: this.httpHeaders});
  }

  getArtistTopTrack(id: string): Observable<Track>{
    return this.http.get<Track>(`${this._baseUrl}/topArtistTrack/${id}`, {headers: this.httpHeaders})
  }
}
