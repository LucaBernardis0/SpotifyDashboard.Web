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
