import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../models/artist';
import { ArtistService } from '../artist.service';
import { Track } from '../../models/track';
import { Album } from '../../models/album';
import { error } from 'console';


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


  getUserTopArtist(): Observable<Artist>{
    return this.http.get<Artist>(this._baseUrl + '/topArtist', {headers: this.httpHeaders});
  }

  getArtistTopTrack(id: string): Observable<Track>{
    return this.http.get<Track>(`${this._baseUrl}/topArtistTrack/${id}`, {headers: this.httpHeaders})
  }

  getArtistAlbums(id: string): Observable<any>{
    return this.http.get<any>(`${this._baseUrl}/getAlbums/${id}`, {headers: this.httpHeaders})
  }
}
