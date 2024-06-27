import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private access_token$: BehaviorSubject<string | null | undefined> = new BehaviorSubject<string | null | undefined>(null);

  constructor(){ }

  setToken(token: string | undefined){
    this.access_token$.next(token);
  }

  getToken(): string | undefined | null {
    console.log(this.access_token$.value);
    return this.access_token$.value;
  }

}
