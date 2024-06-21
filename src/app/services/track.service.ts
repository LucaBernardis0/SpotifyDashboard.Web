import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/track';

  constructor(private http: HttpClient) { }


  getTopTenSongs(): Observable<Track[]> {
    return this.http.get<Track[]>(this._baseURL + '/topTenTracks');
  }

  getDailySong(): Observable<Track>{
    return this.http.get<Track>(this._baseURL + '/dailyTrack');
  }

  getWeeklyTrack(): Observable<Track>{
    return this.http.get<Track>(this._baseURL + '/weeklyTrack');
  }

  getDailyTime(): Observable<number>{
    return this.http.get<number>(this._baseURL + '/dailyTime');
  }

  getWeeklyTime(): Observable<number>{
    return this.http.get<number>(this._baseURL + '/weeklyTime');
  }

}
