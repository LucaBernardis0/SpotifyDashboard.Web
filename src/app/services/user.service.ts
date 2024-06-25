import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private access_token$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(){ }

  setToken(token: string){
    this.access_token$.next(token);
    console.log( this.access_token$.getValue());
  }

  getToken(): string | null {
    return this.access_token$.value;
  }
}