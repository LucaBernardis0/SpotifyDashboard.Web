import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../../models/track';
import { TrackService } from '../track.service';

@Injectable({
  providedIn: 'root'
})
export class TracksApiService {

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.trackService.getToken()}`,
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/serverApi/track';

  constructor(private http: HttpClient, private trackService: TrackService) { }


  getTopTenSongs(): Observable<Track[]> {
    return this.http.get<Track[]>(this._baseURL + '/topTenTracks', {headers: this.headers});
  }

  getRecommended(seedArtist: string, seedGenres: string, seedTracks: string): Observable<any>{
    return this.http.get<any>(`${this._baseURL}/getRecommended?`, {headers: this.headers, params: {seedArtist, seedGenres, seedTracks}});

  }

}
