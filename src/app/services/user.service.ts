import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private access_token: string = 'token';


  constructor(){ }


  setToken(token: string){
    this.access_token = token;
    console.log(this.access_token);
  }

  getToken(){
    return this.access_token;
  }
}